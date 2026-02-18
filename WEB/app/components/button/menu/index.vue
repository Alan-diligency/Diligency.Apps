<template>
    <button @click="toggleMenu"
        class="relative flex items-center justify-center gap-1 p-2 px-2 text-lg transition-all inter-bold text-secondary hover:text-secondary-600 duration-300">
        <span class="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
             after:bg-secondary after:transition-all after:duration-300 
             hover:after:w-full hover:after:opacity-100" :class="{ 'after:w-full after:opacity-100': isActive }">
            {{ props.data.name[locale] }}
        </span>

        <Icon v-if="hasChildren" name="lucide:chevron-down" :class="[
            'size-6 transition-transform duration-300 mr-3',
            openMenu?._id === currentMenuId ? 'rotate-180' : 'rotate-0',]" />
    </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useMenuStore } from '~/stores/menu.store'
import type { MenuType } from '~/utils/types'

const router = useRouter()
const menuStore = useMenuStore()

const openMenu = computed(() => menuStore.openMenu)

const props = defineProps({
    data: {
        required: true,
        type: Object,
    },
})

const { locale } = useI18n()

const hasChildren = computed(() => props.data.children?.length > 0)
const currentMenuId = computed(() => props.data._id)

const toggleMenu = () => {
    const menu = props.data as MenuType

    if (menu.link) {
        router.push(menu.link)
    } else {
        menuStore.SetSubMenuList(menu)
    }
}

const isActive = computed(() => false)
</script>
