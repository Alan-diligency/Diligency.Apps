<template>
    <UModal v-model:open="_visibility" :dismissible="false" :title="`Ajouter Menus`" :description="``"
        :ui="{ footer: 'justify-end' }" :close="false">
        <template #body>
            <div class="relative p-2 bg-gray-50">
                <UForm :schema="schema" :state="state" @submit="onSubmit">
                    <div class="flex flex-col gap-4">
                        <div class="p-1 rounded-md space-y-3">
                            <UFormField label="Icon" name="input">
                                <div class="w-full text-gray-700 flex flex-row gap-1 items-center py-2">
                                    <UIcon :name="ConvertIcon(state.icon)" class="size-6" />
                                    <UInput v-model="state.icon" class="w-full" />
                                </div>
                            </UFormField>
                            <UFormField label="Parent">
                                <USelect arrow v-model="state.parent" :items="menusStore.GetParentMenus"
                                    class="w-full" />
                            </UFormField>
                            <UFormField label="Nom" name="text">
                                <div class="rounded-md bg-gray-200 p-2">
                                    <div class="flex flex-flex-row gap-2 w-full">
                                        <div class="flex flex-col w-full">
                                            <div class="font-medium uppercase">
                                                Français:</div>
                                            <UTextarea v-model="state.name.fr" class="w-full rounded-none min-h-24" />
                                        </div>
                                        <div class="flex flex-col w-full">
                                            <div class="font-medium uppercase">
                                                Anglais:</div>
                                            <UTextarea v-model="state.name.en" class="w-full min-h-24" />
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
import { v4 as uuid4 } from 'uuid'
import z from 'zod'
import { useConverter } from '~/composable/useConverter'
import { useForms } from '~/composable/useForms'
import { NO_PARENT } from '~/helpers/constants'
import { DEFAULT_LOCAL } from '~/helpers/types/locale-type'

const _visibility = ref(false)
const menusStore = useMenuStore()
const navigationStore = useNavigationStore()
const toast = useToast()

const pageStore = usePageStore()
const { ConvertIcon } = useConverter()
const { updateOrCreateFormItems, formatLocaleData } = useForms()


const props = defineProps(
    {
        items: {
            type: [Array] as PropType<any[]>,
            default: []
        },
        path: {
            type: String,
            default: ''
        },
        visibility: {
            type: Boolean,
            default: false
        },
    }
)

watch(
    () => props.visibility,
    (newVal) => {
        _visibility.value = newVal
        if (newVal) {
            state.name = DEFAULT_LOCAL
        }
    }
)

const schema = z.object({
    icon: z.string().optional(),
    parent: z.string().optional(),
    name: z.object({
        en: z.string().min(3, "English text must be at least 3 characters"),
        fr: z.string().min(3, "Frech text must be at least 3 characters"),
    })
})

type Schema = z.output<typeof schema>

const state = reactive({
    icon: 'lucide:circle',
    parent: undefined,
    name: DEFAULT_LOCAL
})

const closeModal = () => {
    emit('close')
}

const buildMenu = (menu: any) => {
    const hasParent = menu.parent !== NO_PARENT

    const label = (menu.name.en ?? menu.name.fr)
        .toLowerCase()
        .replace(/\s+/g, '-')
        .trim()

    const key = uuid4()

    const data = {
        _type: "menu",
        _id: "",
        _key: key,
        icon: menu.icon,
        name: {
            en: menu.name.en,
            fr: menu.name.fr
        },
        link: menu.link,
        number: menusStore.GetParentMenus.length - 1,
        children: []
    }

    if (!hasParent) {
        data._id = `menu-${label}`
        data.link = `/${label}`
        return data
    }

    // find parent
    const parentMenu = menusStore.menus?.find(
        (x: any) => x._id === `menu-${menu.parent}`
    ) as any

    if (!parentMenu) {
        throw new Error("Parent menu not found")
    }

    data._id = `menu-${menu.parent}-${label}`
    data.link = `/${menu.parent}/${label}`
    // ensure children array exists
    if (!parentMenu.children) {
        parentMenu.children = []
    }

    parentMenu.children.push(data)

    return toRaw(parentMenu)
}


const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    const updated = buildMenu(event.data)
    const hasParent = event.data.parent !== NO_PARENT
    let res = null

    if (!hasParent) {
        res = await menusStore.AddMenuAsync(updated)
    }
    else {
        res = await menusStore.UpdateMenuByKeyAsync(updated)
    }

    if (res?.success) {
        toast.add({
            title: `Mise à jour avec succès!`,
            color: 'success',
            id: 'modal-success'
        })
        await useAppStore().RefreshAsync()
        closeModal()
    }
}

const emit = defineEmits<{
    (e: 'close'): void
}>()
</script>