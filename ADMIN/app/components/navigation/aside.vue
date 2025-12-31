<template>
    <aside id="top-bar-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
            <a class="flex items-center ps-2.5 mb-5">
                <div class="self-center text-lg text-heading font-semibold whitespace-nowrap">Diligency Admin</div>
            </a>
            <ul class="space-y-2 font-medium">
                <li v-for="(item, index) in sideMenu" :key="index">
                    <a @click.prevent="onClick(item)" :class="[
                        'group cursor-pointer flex items-center p-2 text-body group rounded-none transition-all duration-300',
                        item._id === activeMenuId ? 'bg-fg-brand text-white' : 'hover:bg-neutral-tertiary hover:text-fg-brand'
                    ]">
                        <Icon :name="item.icon" size="20"
                            :class="item._id === activeMenuId ? 'scale-150' : 'scale-100'" />
                        <span class="flex-1 ms-3 whitespace-nowrap">{{ item.name }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { MenuData } from '~/data/menu/menu.data';
import type { MenuType } from '~/data/menu/menu.type';
import { useMenuStore } from '~/stores/menu.store';

const menuStore = useMenuStore()
const sideMenu = ref(MenuData as MenuType[])
const activeMenuId = ref<string>(sideMenu.value[0]?._id ?? "")
const onClick = (item: MenuType) => {
    activeMenuId.value = item?._id
    menuStore.SetCurrentMenu(item)
}

</script>