<template>
    <UModal v-model:open="_visibility" :dismissible="false" :title="`Supprimer Menus`" :description="``"
        :ui="{ footer: 'justify-end' }" :close="false">
        <template #body>
            <div class="flex flex-col gap-2">
                <div v-for="(item, index) in (menuStore.menus as any)" :key="index">
                    <div class="w-full p-1">
                        <div class="flex flex-row items-center gap-2">
                            <div class="w-full p-1 flex items-center  cursor-pointer"
                                :class="isParentSelected(item._key) ? 'bg-red-100' : 'bg-gray-100'"
                                @click="toggleParent(item)">
                                <UIcon name="i-lucide-folder-open" class="size-6" />
                                <div class="font-bold text-gray-500 flex items-center justify-between w-full p-1">
                                    {{ item.name?.fr }}
                                    <UButton type="button"
                                        :icon="isParentSelected(item._id) ? 'i-lucide-circle-check' : 'i-lucide-circle'"
                                        size="xs" color="error" variant="solid" class="cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <div class="w-full pl-8">
                            <div class="w-full bg-gray-100 p-2 flex flex-col gap-2" v-if="item?.children.length > 0">
                                <div v-for="(ch, index) in item?.children" :key="index">
                                    <div class="w-full flex items-center gap-2 p-2 cursor-pointer"
                                        @click="toggleChild(ch, item)"
                                        :class="isChildSelected(ch._key, item._key) ? 'bg-red-100' : 'bg-white'">
                                        <UIcon :name="ConvertIcon(ch.icon)" class="size-6" />
                                        <div
                                            class="font-bold text-gray-500 flex items-center justify-between w-full py-1">
                                            {{ ch.name.fr }}
                                            <UButton type="button"
                                                :icon="isChildSelected(ch._key, item._key) ? 'i-lucide-circle-check' : 'i-lucide-circle'"
                                                size="xs" color="error" variant="soft" class="cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LoadingInLoading />
                </div>
            </div>
            <div class="w-full flex justify-end gap-1 py-2">
                <ButtonsBlack text="ANNULER" @clicked="closeModal" />
                <ButtonsBlue text="SUPPRIMER" @clicked="onSubmit" />
            </div>
        </template>
    </UModal>
</template>
<script setup lang="ts">
import { z } from 'zod';
import { useConverter } from '~/composable/useConverter';
import type { MenuType } from '~/helpers/entities/menu';

const { ConvertIcon } = useConverter()
const menuStore = useMenuStore()

const emit = defineEmits<{
    (e: 'close'): void
}>()

const props = defineProps({
    visibility: {
        type: Boolean,
        default: false
    }
})

const _visibility = ref(false)

watch(
    () => props.visibility,
    (newVal) => {
        _visibility.value = newVal
    }
)

const schema = z.object({
    parentKeys: z.array(z.string())
})

type Schema = z.output<typeof schema>

const state = reactive<Schema>({
    parentKeys: []
})

const parentMenus = ref<MenuType[]>([])
const childMenus = ref<MenuType[]>([])
const deletedMenus = ref<MenuType[]>([])

// Helper: sync deletedMenus for a given parent
const syncDeletedParent = (parent: MenuType) => {
    // get children that are NOT selected (i.e., not in childMenus)
    const deselectedChildren = parent.children.filter(
        c => !childMenus.value.some(x => x._key === c._key)
    )

    const existIndex = deletedMenus.value.findIndex(x => x._key === parent._key)

    if (existIndex >= 0) {
        // update children
        deletedMenus.value[existIndex] = { ...parent, children: deselectedChildren }
    } else if (deselectedChildren.length > 0) {
        // add parent with deselected children if there are any
        deletedMenus.value.push({ ...parent, children: deselectedChildren })
    } else {
        // if no deselected children, remove parent from deletedMenus
        deletedMenus.value = deletedMenus.value.filter(x => x._key !== parent._key)
    }
}

// Toggle parent selection
const toggleParent = (parent: MenuType) => {
    const existIndex = parentMenus.value.findIndex(x => x._key === parent._key)

    if (existIndex >= 0) {
        // Deselect parent → remove from selected + remove children
        parentMenus.value.splice(existIndex, 1)
        parent.children.forEach(c => {
            const idx = childMenus.value.findIndex(x => x._key === c._key)
            if (idx >= 0) childMenus.value.splice(idx, 1)
        })

        // Update deletedMenus: parent with current deselected children
        syncDeletedParent(parent)
    } else {
        // Select parent → add parent + all children to selected
        parentMenus.value.push({ ...parent })
        parent.children.forEach(c => {
            if (!childMenus.value.some(x => x._key === c._key)) {
                childMenus.value.push(c)
            }
        })

        // Remove parent from deletedMenus
        deletedMenus.value = deletedMenus.value.filter(x => x._key !== parent._key)
    }
}

// Toggle child selection
const toggleChild = (child: MenuType, parent: MenuType) => {
    const existIndex = childMenus.value.findIndex(x => x._key === child._key)

    if (existIndex >= 0) {
        // Deselect child → remove from childMenus
        childMenus.value.splice(existIndex, 1)
    } else {
        // Select child → add to childMenus
        childMenus.value.push(child)
    }

    // Update parent selection automatically
    shouldCheckParent(parent)

    // Update deletedMenus: parent with deselected children
    syncDeletedParent(parent)
}

// Check parent based on its children selection
const shouldCheckParent = (parent: MenuType) => {
    const allSelected = parent.children.every(c =>
        childMenus.value.some(x => x._key === c._key)
    )

    const existIndex = parentMenus.value.findIndex(x => x._key === parent._key)

    if (allSelected && existIndex < 0) {
        // All children selected → add parent
        parentMenus.value.push({ ...parent })
        deletedMenus.value = deletedMenus.value.filter(x => x._key !== parent._key)
    } else if (!allSelected && existIndex >= 0) {
        // Not all children selected → remove parent
        parentMenus.value.splice(existIndex, 1)
    }
}




const isParentSelected = (key: string) => {
    return parentMenus.value.find(x => x._key == key)
}

const isChildSelected = (childKey: string, parentKey: string) => {
    return childMenus.value.find(x => x._key == childKey)
}

const closeModal = () => {
    emit('close')
}


const onSubmit = async () => {
    await menuStore.deleteMenusByIdAsync(parentMenus.value, deletedMenus.value)
}
</script>
