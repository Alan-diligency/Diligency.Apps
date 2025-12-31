<template>
    <div class="p-2 bg-gray-200 flex flex-col gap-4">
        <TableParent :excluded-keys="parentExcludedKeys" :data="currentSubMenu" />
        <TableChild :excluded-keys="childExcludedKeys" :data="currentMenuChildTab" :parent-id="parentId"
            :tab-data="menuChildren" @switch-tab="handleSwitchTab" />
    </div>
</template>

<script lang="ts" setup>
import { Modal } from 'flowbite';
import type { DiligencyMenuType } from '~/data/menu/diligency.menu.type';
const contentStore = useContentStore()

const modal = ref<any>(null)
const currentMenuChildTab = ref<DiligencyMenuType | null>(null)
const menuChildren = ref<DiligencyMenuType[]>()

const currentSubMenu = computed(() => contentStore.currentSubMenu as DiligencyMenuType)
const parentId = computed(() => contentStore.currentSubMenu?._id)



const parentExcludedKeys = ["_createdAt", "_id", "_rev", "_type", "_updatedAt", "children", "key", "parentId", "_key"]
const childExcludedKeys = ["_createdAt", "_id", "_rev", "_type", "_updatedAt", "children", "parentId", "number", "_key", "key"]

watch(
    () => currentSubMenu.value,
    (newVal) => {
        const children = newVal?.children
        menuChildren.value = children
        currentMenuChildTab.value = children?.[0] ?? null
    },
    { immediate: true }
)

const handleSwitchTab = (item: any) => {
    currentMenuChildTab.value = item
}

onMounted(() => {
    const $el = document.getElementById("edit-modal");
    const options = {
        placement: "center",
        backdrop: "static",
        closable: false,
    };
    const instanceOptions = { id: "edit-modal", override: true };
    modal.value = new Modal($el!, options as any, instanceOptions);
});

</script>
