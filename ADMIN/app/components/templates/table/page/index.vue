<script setup lang="ts">
const navigationStore = useNavigationStore()
const pageStore = usePageStore()

watch(
    () => navigationStore.currentNavigation?.key,
    async (currentKey) => {
        if (currentKey && navigationStore.currentNavigation?.type == PAGES_KEY as any) {
            await pageStore.GetPagesByKey(currentKey) as any
        }
    },
    { immediate: true }
)
</script>

<template>
    <div class="flex flex-col">
        <TemplatesTablePageHero :data="(pageStore.selectedPage as any)?.hero" />
        <TemplatesTablePageBlock :data="(pageStore.selectedPage as any)?.blocks" />
    </div>
</template>