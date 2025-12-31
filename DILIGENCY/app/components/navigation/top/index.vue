<template>
    <nav :class="[
        'border-none top-0 fixed w-full h-20 lg:h-16 flex justify-center z-50 transition-colors duration-300',
        isScrolled ? 'bg-tertiary' : 'bg-transparent']">
        <div class="flex items-center justify-between w-full h-full px-4 lg:px-10 2xl:px-35">
            <NavigationTopLogo />
            <NavigationTopMenu />
            <NavigationTopLocale />
            <NavigationTopHumberger />
        </div>
        <ClientOnly>
            <TemplatesMenuMobileSubmenu />
            <TemplatesMenuDesktopSubmenu />
        </ClientOnly>

    </nav>
</template>

<script lang="ts" setup>
import { useMenuStore } from '~/stores/menu.store';

const menuStore = useMenuStore()
const route = useRoute()

const SCROLL_POINT = ref(80)

const isScrolled = ref<Boolean>(false)
const path = computed(() => route.path)

const handleScroll = () => {
    if (menuStore.permanentTertiaryHeaderBackground.includes(path.value)) {
        isScrolled.value = true
        return
    }

    isScrolled.value = window.scrollY > SCROLL_POINT.value
}

watch(() => route.path, () => {
    handleScroll()
})

onMounted(async () => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    menuStore.SetMenuList(await menuStore.GetMenuListAsync())
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>