<template>
    <UModal :close="false" v-model:open="_visibility" :dismissible="false" :title="`Edit Text`" :description="``"
        :ui="{ footer: 'justify-end' }">
        <template #body>
            <div class="relative p-2 bg-gray-50">
                == {{ _path }} ==
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
import { deepToRaw } from '~/helpers/tools'
import { DEFAULT_LOCAL, LocaleType } from '~/helpers/types/locale-type'
import { useAppStore, type UpdateStringParameter } from '~/stores/app.store'
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
            editedKey.value = props.item?._key
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

const editedKey = ref('')

const resetForm = () => {
    state.text.en = ''
    state.text.fr = ''
}

onMounted(() => {
    resetForm()
})
const _path = computed(() => props.path)

const identifier = computed(() => {
    const id = navigationStore.currentNavigation?.identifier
    return id ? deepToRaw(id)?._key : navigationStore.currentNavigation?.key
})
const onSubmit = async (event: FormSubmitEvent<Schema>) => {

    let res: any
    console.log(props.type)
    if (props.type == "array") {
        const updated = updateOrCreateFormItems(props.items, (event.data as LocaleType), editedKey.value)

        const param = {
            key: identifier.value,
            fieldPath: _path.value,
            value: formatLocaleData(updated as any),
            query: props.query
        } as UpdateStringParameter

        res = await appStore.UpdateData(param)
    }

    if (props.type == "object") {
        const param = {
            key: identifier.value,
            fieldPath: _path.value,
            value: {
                _key: props.items[0]?._key ?? uuidv4(),
                en: state.text.en,
                fr: state.text.fr
            },
            query: props.query
        } as UpdateStringParameter

        res = await appStore.UpdateData(param)
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

const emit = defineEmits<{
    (e: 'close'): void
}>()
</script>