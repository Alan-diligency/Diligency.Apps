<template>
    <div class="border-default">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-body gap-2">
            <li class="me-2" v-for="item in menus" :key="item._id">
                <a href="#" @click.prevent="setActive(item)" :class="[
                    'inline-flex items-center justify-center px-0 border-b rounded-t-base group transition-all duration-350 pb-1',
                    activeId === item._id
                        ? 'text-fg-brand'
                        : 'text-body border-transparent']">
                    <Icon :name="item.icon" size="18" />
                    <span class="px-1">{{ item.name }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import type { MenuType } from '~/data/menu/menu.type'
import { useMenuStore } from '~/stores/menu.store'

const menuStore = useMenuStore()
const menus = computed(() => menuStore.currentMenu.children as MenuType[])
const activeId = computed(() => menuStore.currentSubMenu._id)

const setActive = (item: MenuType) => {
    menuStore.SetCurrentSubMenu(item)
}

</script>
