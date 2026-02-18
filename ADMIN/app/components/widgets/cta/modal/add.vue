<template>
    <UModal v-model:open="_visibility" :dismissible="false" :title="`Ajouter un nouvau CTA`" :description="``"
        :ui="{ footer: 'justify-end' }" :close="false">
        <template #body>
            <div class="relative p-2 bg-gray-50">
                <UForm :schema="schema" :state="state" @submit="onSubmit">
                    <div class="flex flex-col gap-4">
                        <div class="p-1 rounded-md space-y-3">
                            <UFormField label="Icon" name="icon">
                                <div class="flex gap-2">
                                    <div
                                        class="bg-black p-2 h-7 aspect-square rounded-sm flex items-center justify-center">
                                        <UIcon :name="ConvertIcon(state.icon)" class="size-5 text-white" />
                                    </div>
                                    <UInput v-model="state.icon" class="w-full" />
                                </div>
                            </UFormField>
                            <UFormField label="Lien" name="link">
                                <UInput v-model="state.link" class="w-full" />
                            </UFormField>
                            <UFormField label="Type" name="type">
                                <USelect v-model="state.type" :items="CTA_ITEMS_TYPE" class="w-full" />
                            </UFormField>
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
import z from 'zod'
import { useConverter } from '~/composable/useConverter'
import { useForms } from '~/composable/useForms'
import { DEFAULT_FIELD_UNDEFINED, DEFAULT_ICON } from '~/helpers/constants'
import type { UpdateParameter } from '~/helpers/dto/requests'
import { CTA_ITEMS_TYPE, CtaType } from '~/helpers/types/cta-type'
import { useAppStore } from '~/stores/app.store'
import { PROPS } from '../props'

const _visibility = ref(false)
const toast = useToast()

const appStore = useAppStore()
const { ConvertIcon } = useConverter()
const { updateOrCreateFormItems } = useForms()

const props = defineProps(PROPS)

watch(
    () => props.visibility,
    (newVal) => {
        _visibility.value = newVal
    }
)
const parameter = computed(() => props.parameter)

const schema = z.object({
    icon: z.string().optional(),
    link: z.string().optional(),
    type: z.string("ce champ est requis"),
    text: z.object({
        en: z.string().optional(),
        fr: z.string().optional()
    }).optional()
})

type Schema = z.output<typeof schema>

const state = reactive({
    icon: DEFAULT_ICON,
    link: DEFAULT_FIELD_UNDEFINED,
    type: DEFAULT_FIELD_UNDEFINED,
    text: {
        en: undefined,
        fr: undefined
    }
})

const closeModal = () => {
    emit('close')
}

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    const updated = updateOrCreateFormItems(props.items, event.data as CtaType)
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

const emit = defineEmits<{
    (e: 'close'): void
}>()
</script>