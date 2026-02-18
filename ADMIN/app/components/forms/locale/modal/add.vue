<template>
    <UModal v-model:open="_visibility" :dismissible="false" :title="`Ajouter un `" :description="``"
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
import z from 'zod'
import { useConverter } from '~/composable/useConverter'
import { useForms } from '~/composable/useForms'
import { deepToRaw } from '~/helpers/tools'
import { DEFAULT_LOCAL } from '~/helpers/types/locale-type'
import type { UpdateStringParameter } from '~/stores/app.store'
import { LOCALE_MODAL_PROPS } from './props'

const _visibility = ref(false)
const navigationStore = useNavigationStore()
const toast = useToast()
const appStore = useAppStore()
const pageStore = usePageStore()
const { ConvertIcon } = useConverter()
const { updateOrCreateFormItems, formatLocaleData } = useForms()

const props = defineProps(LOCALE_MODAL_PROPS)

watch(
    () => props.visibility,
    (newVal) => {
        _visibility.value = newVal
        if (newVal) {
            state.text = DEFAULT_LOCAL
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

const resetForm = () => {
    state.text = DEFAULT_LOCAL
}

onMounted(() => {
    resetForm()
})

const identifier = computed(() => {
    const id = navigationStore.currentNavigation?.identifier
    return id ? deepToRaw(id)?._key : navigationStore.currentNavigation?.key
})

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    const updated = updateOrCreateFormItems(props.items, event.data as any, undefined)
    const param = {
        key: identifier.value,
        fieldPath: props.path,
        value: formatLocaleData(updated as any),
        query: props.query
    } as UpdateStringParameter

    const res = await appStore.UpdateData(param)
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