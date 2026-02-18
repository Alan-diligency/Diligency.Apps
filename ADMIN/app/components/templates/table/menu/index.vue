<script setup lang="ts">
import { useConverter } from '~/composable/useConverter'
import type { UpdateParameter } from '~/helpers/dto/requests'
import { MENU_KEY } from '~/stores/navigation.store'

export type PathItem = {
    field: string
    key: string
}

const navigationStore = useNavigationStore()
const menuStore = useMenuStore()

const { ConvertIcon } = useConverter()
const data = computed(() => menuStore.selectedMenu)

watch(
    () => navigationStore.currentNavigation?.key,
    async (currentKey) => {
        if (currentKey && navigationStore.currentNavigation?.type == MENU_KEY as any) {
            await menuStore.GetMenuByKey() as any
        }
    },
    { immediate: true }
)

const addModalVisibility = ref(false)
const deleteModalVisibility = ref(false)

const getPath = (field: string) => {
    const parentKey = navigationStore.currentNavigation?.identifier?._key
    if (!parentKey) return ''

    const data = paths.value.find(x => x.field === field)
    const childKey = data?.key
    if (!childKey) return ''

    return `[_key=='${parentKey}'].children[_key=='${childKey}'].${field}`
}

const paths = ref<PathItem[]>([])
const updateKey = (payload: PathItem) => {
    const index = paths.value.findIndex(x => x.field === payload.field)
    if (index !== -1) {
        paths.value[index] = payload
    } else {
        paths.value.push(payload)
    }
}

const appStore = useAppStore()

const parameter = computed(() => {
    const key = navigationStore.currentNavigation?.key
    return {
        parentId: 'menu-agence',
        key: key,
        patch: `children[_key=="${key}"]`,
        value: null
    } as UpdateParameter
})

const getParameter = (key: string) => {
    return {
        ...parameter.value,
        patch: `children[_key=="${key}"].${key}`
    }
}
</script>


<template>
    <section class="mt-2 w-full bg-gray-400 rounded-xl p-2">
        <div class="w-full relative transition-all duration-250">
            <div class="py-2 flex justify-between items-center">
                MENUS
                <div class="mr-15 flex gap-2">
                    <UButton @click=" deleteModalVisibility = true" type="button" label="Supprimer"
                        icon="i-lucide-trash" size="md" color="error" variant="solid" class="cursor-pointer" />
                    <UButton @click="addModalVisibility = true" type="button" label="Ajouter Nouvau Menus"
                        icon="i-lucide-plus" size="md" color="neutral" variant="solid" class="cursor-pointer" />
                </div>

                <TemplatesTableMenuModalDelete :visibility="deleteModalVisibility" path="menu"
                    @close="deleteModalVisibility = false" />

                <TemplatesTableMenuModalAdd :visibility="addModalVisibility" path="menu"
                    @close="addModalVisibility = false" />

            </div>
            <UCollapsible :defaultOpen="true" class="flex flex-col gap-2 w-full">
                <div class="absolute top-2 right-4 z-10 flex flex-row gap-2">
                    <div class=" w-7 ">
                        <ToolButtonToggle />
                    </div>
                </div>
                <template #content>

                    <div class="flex flex-col gap-2 w-full rounded-sm p-2 bg-gray-50">
                        <WidgetsString :icon="data?.icon" displayText="icon" :item="data?.icon"
                            :parameter="getParameter('icon')" />
                        <WidgetsString displayText="link" :item="data?.link" :parameter="getParameter('link')" />
                        <WidgetsString displayText="number" :item="data?.number" :parameter="getParameter('number')" />
                        <WidgetsLocaleItem displayText="name" :item="data?.name" :actions="['edit']"
                            :parameter="getParameter('name')" />
                        <WidgetsLocaleItem displayText="description" :item="data?.description" :actions="['edit']"
                            :parameter="getParameter('description')" />
                    </div>
                </template>
            </UCollapsible>
        </div>
    </section>
</template>