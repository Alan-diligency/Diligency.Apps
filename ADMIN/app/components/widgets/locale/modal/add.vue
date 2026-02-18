<template>
    <UModal v-model:open="_visibility" :dismissible="false" :title="`Ajout`" :description="``"
        :ui="{ footer: 'justify-end' }" :close="false">
        <template #body>
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
import type { LocaleType } from '~/helpers/types/locale-type'
import { PROPS } from './props'

const _visibility = ref(false)
const toast = useToast()
const appStore = useAppStore()
const { ConvertIcon } = useConverter()
const { updateOrCreateFormItems, formatLocaleData } = useForms()

const props = defineProps(PROPS)
const parameter = computed(() => props.parameter)

const emit = defineEmits<{
    (e: 'close'): void
}>()

const closeModal = () => {
    emit('close')
}

watch(
    () => props.visibility,
    (newVal) => {
        _visibility.value = newVal
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
    text: {
        en: undefined,
        fr: undefined
    }
})

const onSubmit = async (event: FormSubmitEvent<Schema>) => {

    const updated = updateOrCreateFormItems(props.items, {
        _key: uuidv4(),
        en: event.data?.text?.en,
        fr: event.data?.text?.fr
    } as LocaleType)
    const param = {
        ...parameter.value,
        value: updated
    } as UpdateParameter

    const res = await appStore.Update(param)
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