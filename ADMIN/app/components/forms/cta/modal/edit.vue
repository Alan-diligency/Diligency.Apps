<template>
    <UModal :close="false" v-model:open="_visibility" :dismissible="false" :title="`Edit CTA`" :description="``"
        :ui="{ footer: 'justify-end' }">
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
                                <div class="rounded-md bg-gray-200 p-2">
                                    <div class="flex flex-col sm:flex-row gap-4 ">
                                        <div class="flex-1 p-2">
                                            <div class="font-medium uppercase">
                                                Français:</div>
                                            <UTextarea v-model="state.text.fr" class="w-full rounded-none min-h-32" />
                                        </div>
                                        <div class="flex-1 p-2">
                                            <div class="font-medium mb-1 uppercase">
                                                Anglais:</div>
                                            <UTextarea v-model="state.text.en" class="w-full min-h-32" />
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
import { v4 as uuidv4 } from 'uuid'
import z from 'zod'
import { useConverter } from '~/composable/useConverter'
import { DEFAULT_FIELD_UNDEFINED, DEFAULT_ICON } from '~/helpers/constants'
import { deepToRaw } from '~/helpers/tools'
import { CTA_ITEMS_TYPE, CtaType } from '~/helpers/types/cta-type'
import { DEFAULT_LOCAL } from '~/helpers/types/locale-type'
import { useAppStore, type UpdateStringParameter } from '~/stores/app.store'

const _visibility = ref(false)
const navigationStore = useNavigationStore()
const toast = useToast()

const pageStore = usePageStore()
const appStore = useAppStore()

const { ConvertIcon } = useConverter()

const props = defineProps(
    {
        items: {
            type: [Array] as PropType<any[]>,
            default: []
        },
        item: {
            type: [Object] as PropType<any>,
            default: null
        },
        path: {
            type: String,
            default: ''
        },
        visibility: {
            type: Boolean,
            default: false
        },
        query: {
            type: String,
            default: ''
        }
    }
)

watch(
    () => props.visibility,
    (newVal) => {
        _visibility.value = newVal
        if (newVal) {
            editedKey.value = props.item?._key
            state.icon = props.item?.icon
            state.link = props.item?.link
            state.type = props.item?.type
            state.text.en = props.item?.text?.en
            state.text.fr = props.item?.text?.fr
        }
    }
)

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
    text: DEFAULT_LOCAL
})

const closeModal = () => {
    emit('close')
}

const editedKey = ref('')
const getUpdateArray = (item: CtaType): CtaType[] => {
    const original: CtaType[] = props.items.map(item => deepToRaw(item))

    const existed = original.find(x => x._key == editedKey.value)

    console.log("original", original)
    console.log("existed", existed)

    const updated = deepToRaw({
        ...item,
        _key: existed?._key || uuidv4(),
    })

    const data = [
        ...original.filter(x => x._key != editedKey.value),
        updated
    ]
    return data
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
    const param = {
        key: identifier.value,
        fieldPath: props.path,
        value: getUpdateArray(event.data as CtaType),
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