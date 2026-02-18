<template>
    <div class="flex flex-col gap-2 w-full md:w-2/3 h-full pt-20">
        <div class="w-full" v-if="data">
            <div class="py-4 text-3xl md:text-5xl text-center text-tertiary text-semibold">
                <span class="capitalize">
                    {{ (data.title as any)?.[locale] }}
                </span>
            </div>
            <div class="text-center text-lg/6 text-tertiary/80">
                {{ (data.subtitle as any)?.[locale] }}
            </div>
        </div>

        <form @submit.prevent="handleSubmitAsync">
            <div v-if="(data?.form?.length ?? 0) > 0">
                <div v-for="(item, key) in sortFormFields(data?.form as any)" :key="key" class="pt-3">
                    <component :name="item._key" :is="GetFormTemplate(item.type)" :placeholder="item.label?.[locale]"
                        :type="item?.field" :error-color="item?.errorColor" :radio="item?.radio"
                        label-class="text-tertiary/80" v-model="form[item._key]" :error="errors?.[item?._key]"
                        :label="item.label?.[locale]" :custom="item.custom?.[locale]" radio-layout="flex-col" />
                </div>
            </div>

            <div class="pb-5 pt-10">
                <StepButton @changeStep="handleStepChange" :data="data?.buttons" />
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { useApplicationStore } from '~/stores/application.store'
import { GetFormTemplate, sortFormFields } from '~/utils/helpers/component'
import type { ApplicationType } from '~/utils/types'
import { ApplicationStepEnum } from './helpers/applications-step.enum'
import { HandleApplicationNextStepAsync, restoreFormStepFromLocalStorage } from './helpers/steps.helper'
import StepButton from './step-button.vue'

const { locale } = useI18n()
const applicationStore = useApplicationStore()

const props = defineProps({
    data: {
        type: Object as PropType<ApplicationType>,
        required: false
    }
})
const fields = computed(() => props.data?.form ?? [])
const form = reactive<Record<string, any>>({})
const errors = reactive<Record<string, string>>({})

watch(
    fields,
    () => {
        fields.value.forEach(item => {
            if (!(item._key in form)) form[item._key] = ''
        })
        if (import.meta.client) {
            window.scrollTo(0, 0)
        }
    },
    { immediate: true }
)

const { schema } = useDynamicFormSchema(fields)

const handleSubmitAsync = async () => { }

const handleStepChange = async (step: ApplicationStepEnum) => {
    switch (step) {
        case ApplicationStepEnum.PREV:
            const savedForm = restoreFormStepFromLocalStorage(applicationStore.currentStep)
            if (savedForm) {
                // Update reactive form in-place
                Object.keys(savedForm).forEach(key => {
                    form[key] = savedForm[key]
                })

                // Initialize any missing keys
                fields.value.forEach((item: any) => {
                    if (!(item._key in form)) form[item._key] = ''
                })
            }
            applicationStore.previousStep()
            break;
        case ApplicationStepEnum.NEXT:
            await HandleApplicationNextStepAsync(form, errors, schema.value)
            break;
    }
}   
</script>
