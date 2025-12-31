<template>
    <PageLayout customClass="h-auto bg-white">
        <div class="w-full h-auto px-0 lg:px-10 2xl:px-35 py-16">
            <div class="h-full w-full flex flex-col md:flex-row items-start justify-center gap-2 z-10 py-10">
                <div class="w-full space-y-6">
                    <SectionTitleArray :title="data?.title" />
                    <SectionContentSubtitle :subtitle="data?.subtitle" />
                    <div
                        class="w-full md:w-2/3 cursor-pointer text-center md:text-left text-tertiary-500/70 text-xl/7 animate animate-fadein transition-all transition-500">
                        <ul class="w-full">
                            <li v-for="(item, index) in []" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="p-1 w-full md:w-1/2 h-full flex items-end justify-end" v-if="data">
                    <div class="p-4 w-full h-full bg-tertiary rounded-xl">
                        <form class="space-y-2 pt-4 w-full" @submit.prevent="handleSubmit">
                            <div v-for="(item, key) in (sortFormFields(data?.form))" :key="key">
                                <component :name="item._key" :is="getForm(item.type)" v-model="form[item._key]"
                                    :placeholder="item.label?.[locale]" :type="item?.field"
                                    :error-color="item?.errorColor" :error="errors?.[item?._key]"
                                    :radio="item?.radio" />
                            </div>
                            <div class="text-primary py-4">
                                {{ message }}
                            </div>
                            <button type="submit" v-if="!isPosting"
                                class="bg-secondary text-tertiary px-6 py-2 rounded font-normal w-full">
                                {{ locale === 'fr' ? 'Envoyer' : 'Send' }}
                            </button>
                            <button type="submit" class="bg-primary text-tertiary px-6 py-2 rounded font-normal w-full"
                                v-if="isPosting">
                                <div class="size-full flex items-center justify-center gap-2">
                                    <Icon name="lucide:loader" size="24" class="animate animate-spin" />
                                    {{ locale === 'fr' ? 'Enovye en cours...' : 'Sending...' }}
                                </div>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </PageLayout>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { z } from 'zod'
import PageLayout from '~/layouts/page-layout.vue'
import { useContactStore } from '~/stores/contact.store'
import { useFooterStore } from '~/stores/footer.store'
import { useMenuStore } from '~/stores/menu.store'
import { useSanityStore } from '~/stores/sanity.store'
import { GetFormTemplate, sortFormFields } from '~/utils/helpers/component'
import type { SanityFormField } from '~/utils/types'
const menuStore = useMenuStore()
const contactStore = useContactStore()
const footerStore = useFooterStore()
const sanityStore = useSanityStore()
const { locale } = useI18n()

menuStore.SetHumberger(false)

const data = ref()
const footer = ref()
const form = reactive<Record<string, any>>({})
const schema = ref<ReturnType<typeof z.object>>()
const errors = reactive<Record<string, string>>({})
const isSubmitting = ref(false)
const message = ref()
const isPosting = computed(() => sanityStore.isPosting)
const buildZodSchema = (fields: SanityFormField[], locale = 'en') => {
    const shape: Record<string, any> = {}

    fields.forEach((item) => {
        let rule = z.string()
        if (item.required) {
            rule = rule.min(1, item.error?.[locale] ?? 'Required field')
        } else {
            rule = z.string().optional() as any
        }
        shape[item._key] = rule
    })

    return z.object(shape)
}

const getForm = (type: string) => GetFormTemplate(type)

const handleSubmit = async () => {
    if (!schema.value) return
    const result = schema.value.safeParse(form)
    Object.keys(errors).forEach((k) => (errors[k] = ""))

    if (!result.success) {
        // Flatten Zod errors
        const fieldErrors = result.error.flatten().fieldErrors
        Object.entries(fieldErrors).forEach(([key, msgs]) => {
            if (msgs && msgs.length) {
                errors[key] = msgs[0] as any
            }
        })
        console.log(errors)
    } else {
        // message.value = "Form submitted"
        const valuesWithLabel: Record<string, any> = {}

        data.value?.form.forEach((item: SanityFormField) => {
            if (item.type?.toLowerCase() === "check" && item.radio) {
                const selected = item.radio.find(r => form[item._key] === r._key || r.default)
                if (selected) {
                    const labelKey = selected.fieldKey || selected._key
                    valuesWithLabel[labelKey] = true
                }
            } else {
                const labelKey = item.fieldKey || item._key
                valuesWithLabel[labelKey] = form[item._key]
            }
        })

        await sanityStore.PostAsync(valuesWithLabel, "email")
    }
}

onMounted(async () => {
    footer.value = await footerStore.GetDataForContactAsync()
    data.value = await contactStore.GetData()


    data.value?.form.forEach((item: any) => {
        form[item._key] = ''
    })

    schema.value = buildZodSchema(data.value?.form || [], locale.value)
})
</script>
