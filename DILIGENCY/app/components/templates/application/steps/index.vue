<template>
    <div class="flex flex-col gap-2 w-full md:w-2/3 h-full pt-20" v-if="!postResult">
        <div class="w-full" v-if="props.data">
            <div class="py-4 text-3xl md:text-5xl text-center text-tertiary text-semibold">
                <span class="capitalize">
                    {{ props.data?.title?.[locale] }}
                </span>
            </div>
            <div class="text-center text-lg/6 text-tertiary/80">
                {{ props.data?.subtitle?.[locale] }}
            </div>
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="" v-if="(props.data?.form?.length ?? 0) > 0">
                <div v-for="(item, key) in (sortFormFields(props.data?.form as any))" :key="key" class="pt-3">
                    <component :name="item._key" :is="getForm(item.type)" :placeholder="item.label?.[locale]"
                        :type="item?.field" :error-color="item?.errorColor" :radio="item?.radio"
                        label-class="text-tertiary/80" v-model="form[item._key]" :error="errors?.[item?._key]"
                        :label="item.label?.[locale]" :custom="item.custom?.[locale]" radio-layout="flex-col" />
                </div>
            </div>
            <div class="pb-5 pt-10">
                <TemplatesApplicationStepsButton @changeStep="handleStepChange" :data="data?.buttons" />
            </div>
        </form>
    </div>
    <div class="flex flex-col gap-2 w-2/3 h-full" v-else>
        <div class="w-full" v-if="postResultData">
            <div class="py-4 text-3xl md:text-5xl text-center text-tertiary text-semibold">
                <span class="capitalize">
                    {{ postResultData.title[locale] }}
                </span>
            </div>
            <div class="text-center text-lg/6 text-tertiary/80">
                {{ postResultData.subtitle[locale] }}
            </div>
            <div class="w-full flex items-center justify-center py-5">
                <a href="/home"
                    class="text-lg text-tertiary-500/80 underline underline-offset-4 hover:text-secondary transition-all duration-250">Accueil</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import z from 'zod';
import { useApplicationStore } from '~/stores/application.store';
import { useSanityStore } from '~/stores/sanity.store';
import { GetFormTemplate, sortFormFields } from '~/utils/helpers/component';
import type { ApplicationFormType, ApplicationType, RadioOption } from '~/utils/types';

const postResult = ref<string>()
const postResultData = ref<any>()
const props = defineProps({
    data: {
        type: [Object] as PropType<ApplicationType>,
        required: false
    }
})
const form = reactive<Record<string, any>>({})
const schema = ref<ReturnType<typeof z.object>>()
const errors = reactive<Record<string, string>>({})
const applicationStore = useApplicationStore()
const sanityStore = useSanityStore()

const { locale } = useI18n()
const getForm = (type: string) => GetFormTemplate(type)

const buildZodSchema = (fields: ApplicationFormType[], locale = 'en') => {
    const shape: Record<string, any> = {}
    fields.forEach((item) => {
        let rule = z.string()
        if (['Check', 'Radio'].includes(item.type)) {
            rule = z.string().optional() as any;
        } else {
            if (item.required) {
                rule = rule.min(1, (item as any).error?.[locale] ?? 'Required field');
            } else {
                rule = z.string().optional() as any;
            }
        }

        shape[item._key] = rule
    })

    return z.object(shape)
}

const handleStepChange = async (type: string) => {
    //handle for prev button

    if (type == 'prev') {
        applicationStore.previousStep()

    }

    //handle for nextStep
    if (type == 'next') {
        await handleSubmit()
    }
}


const handleSubmit = async () => {
    if ((props.data?.form?.length ?? 0) <= 0) {
        if (applicationStore.isFinalStep) {
            await sanityStore.PostAsync(applicationStore.saveData, "postedApplication")
        } else {
            applicationStore.nextStep()
            applicationStore.SavedForms.push({} as never)
            window.scrollTo(0, 0);
        }
    } else {

        const result = (schema.value as any)?.safeParse(form)
        Object.keys(errors).forEach((k) => (errors[k] = ""))
        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors
            Object.entries(fieldErrors).forEach(([key, msgs]) => {
                if (msgs && (msgs as Array<any>).length) {
                    errors[key] = (msgs as Array<any>)?.[0] as any
                }
            })
        }
        else {
            const valuesWithLabel: Record<string, any> = {}
            props.data?.form.forEach((item: ApplicationFormType) => {
                if (item.type?.toLowerCase() === "radio") {
                    const selected = (item?.radio as RadioOption[])?.find(r => form[item._key] === r._key);
                    const key = props.data?.form.find(x => x.radio?.some(r => r._key === selected?._key))
                    if (selected && key) {
                        valuesWithLabel[item.radio?.[0]?.fieldKey ?? item?._key] = selected?.label?.en;
                    }
                } else if (item.type?.toLowerCase() === "check") {
                    const selectedItems = (item?.radio as RadioOption[])?.filter(r =>
                        form[item._key].split('|').includes(r._key)
                    );

                    const lastData = form[item._key].match(/\|([^|]+)$/)?.[1]

                    let data = ""
                    let dataKey = ""
                    let parentKey: any
                    selectedItems?.forEach((item) => {
                        // Join the _key values with " | "
                        data = selectedItems.map(item => item.label?.en).join(" | ");
                        dataKey = selectedItems.map(item => item._key).join(" | ");

                        // Find the form where any of the radio options' _key matches the selected _key in data
                        parentKey = props.data?.form.find(x =>
                            x.radio?.some(r => dataKey.split(' | ').includes(r._key ?? '')));
                    });
                    if (data) {
                        valuesWithLabel[toCamelCase(item?.label?.en)] = `${data}${lastData ? ` | ${lastData}` : ''}`;
                    } else {
                        // If no data, just set the value to lastData
                        valuesWithLabel[toCamelCase(item?.label?.en)] = lastData || '';
                    }
                }
                else {
                    const labelKey = item.fieldKey || item._key;
                    valuesWithLabel[labelKey] = form[item._key];
                }
            });

            applicationStore.saveData = { ...applicationStore.saveData, ...valuesWithLabel };
            applicationStore.SavedForms.push({ ...form })

            if (!applicationStore.isFinalStep) {
                applicationStore.nextStep()
                window.scrollTo(0, 0);
            } else {
                const result = await sanityStore.PostAsync(applicationStore.saveData, "postedApplication")
                if (result) {
                    postResult.value = 'success'
                    postResultData.value = {
                        title: {
                            fr: "Demande envoyée avec succès",
                            en: "Request sent successfully"
                        },
                        subtitle: {
                            fr: "Votre demande a bien été prise en compte. Notre équipe vous contactera dans les plus brefs délais.",
                            en: "Your request has been received. Our team will contact you shortly."
                        }
                    }
                } else {
                    postResult.value = 'error'
                    postResultData.value = {
                        title: {
                            fr: "Une erreur est survenue",
                            en: "An error occurred"
                        },
                        subtitle: {
                            fr: "Votre demande n’a pas pu être envoyée. Veuillez réessayer plus tard.",
                            en: "Your request could not be sent. Please try again later."
                        }
                    }

                }
                window.scrollTo(0, 0);
            }
        }

    }
}

watch(
    () => props.data?.form,
    (newValue) => {
        if (newValue) {

            const savedForm = applicationStore.getStepForm() || {}

            newValue.forEach((item: any) => {
                form[item._key] = savedForm[item._key] ?? ''
            })
            schema.value = buildZodSchema(newValue || [], locale.value)
        }
    }
);

onMounted(() => {
    applicationStore.resetSaveForm()
})

const toCamelCase = (str: string): string => {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
            index === 0 ? match.toLowerCase() : match.toUpperCase()
        )
        .replace(/\s+/g, '');
}
</script>