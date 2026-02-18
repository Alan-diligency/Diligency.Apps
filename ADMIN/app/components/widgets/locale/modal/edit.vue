<template>
    <UModal :close="false" v-model:open="modalVisibility" :dismissible="false" :title="`Edit Text`" :description="``"
        :ui="{ footer: 'justify-end' }">
        <template #body>
            {{ parameter }}
            <div class="relative p-2 bg-gray-50">
                <UForm :schema="schema" :state="state" @submit="onSubmit">
                    <div class="flex flex-col gap-4">
                        <div class="p-1 rounded-md space-y-3">
                            <UFormField label="text" name="text">
                                <div class="rounded-md bg-gray-200">
                                    <div class="flex flex-row p-2 gap-2">
                                        <div class="size-full  flex flex-col">
                                            <div class="font-medium uppercase">Français:</div>
                                            <UTextarea v-model="state.text.fr" class="w-full" :rows="10" />
                                        </div>
                                        <div class="size-full flex flex-col">
                                            <div class="font-medium uppercase">Anglais:</div>
                                            <UTextarea v-model="state.text.en" class="w-full" :rows="10" />
                                        </div>
                                    </div>
                                </div>
                            </UFormField>
                        </div>
                    </div>
                    <div class="flex items-center justify-end w-full gap-2 pt-2">
                        <ButtonsBlack @clicked="closeModal" text="annuler" />
                        <UButton label="SAUVEGARDER" color="primary" class="cursor-pointer" type="submit" />
                    </div>
                </UForm>
                <LoadingInLoading />
            </div>
        </template>
    </UModal>
</template>
<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import { v4 as uuidv4 } from "uuid"
import z from 'zod'
import { useConverter } from '~/composable/useConverter'
import { useForms } from '~/composable/useForms'
import type { UpdateParameter } from '~/helpers/dto/requests'
import { DEFAULT_LOCAL, LocaleType } from '~/helpers/types/locale-type'
import { useAppStore } from '~/stores/app.store'
import { PROPS } from './props'

const props = defineProps(PROPS)

const modalVisibility = ref(false)
const navigationStore = useNavigationStore()
const toast = useToast()
const appStore = useAppStore()
const pageStore = usePageStore()
const { ConvertIcon } = useConverter()
const { updateOrCreateFormItems, formatLocaleData } = useForms()

const emit = defineEmits<{
    (e: 'close'): void
}>()


const parameter = computed(() => props.parameter)
watch(
    () => props.visibility,
    (newVal) => {
        modalVisibility.value = newVal
        if (newVal) {
            state.text.en = props.item?.en
            state.text.fr = props.item?.fr
        }
    }
)

const schema = z.object({
    text: z.object({
        en: z.string().optional(),
        fr: z.string().optional()
    }).optional()
})

type Schema = z.output<typeof schema>

const state = reactive({
    text: DEFAULT_LOCAL
})

const closeModal = () => {
    emit('close')
}

const onSubmit = async (event: FormSubmitEvent<Schema>) => {

    var res = null
    if (props.datatype == 'object') {
        const updatedParam = {
            ...parameter.value,
            value: {
                _key: props.item?._key ?? uuidv4(),
                en: event.data?.text?.en ?? '',
                fr: event.data?.text?.fr ?? ''
            } as LocaleType
        }

        res = await appStore.Update(updatedParam as UpdateParameter)
    }

    if (props.datatype == "array") {
        const key = props.item?._key || navigationStore.currentNavigation?.identifier?._key || navigationStore.currentNavigation?.key || uuidv4()

        const _item = {
            _key: props.item?._key ?? uuidv4(),
            en: event.data?.text?.en ?? '',
            fr: event.data?.text?.fr ?? ''
        } as LocaleType


        const updated = updateOrCreateFormItems(props.items, _item, key)
        const updatedParam = {
            ...parameter.value,
            value: formatLocaleData(updated as any)
        } as UpdateParameter

        res = await appStore.Update(updatedParam)
    }

    if (res?.success) {
        toast.add({
            title: `Mise à jour avec succès!`,
            color: 'success',
            id: 'modal-success'
        })
        await appStore.RefreshAsync()
        closeModal()
    }
}
</script>