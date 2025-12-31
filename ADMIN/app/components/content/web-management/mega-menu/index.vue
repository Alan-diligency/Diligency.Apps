<template>
    <div v-if="menusList.length" id="accordion-card" data-accordion="collapse">
        <h2 id="accordion-card-heading-1">
            <div
                class="flex items-center justify-between rounded w-full p-1 font-medium rtl:text-right text-body border border-default hover:text-heading  bg-white gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none">
                <div class="">
                    <ContentWebManagementMegaMenuActionsMenuButton :menu-list="menusList" />
                </div>
                <ContentWebManagementMegaMenuActions :id="currentparentId" />
            </div>
        </h2>
        <ContentWebManagementMegaMenuActionsSubMenuButton />
    </div>
    <LoaderStaticLoader :is-loading="!menusList.length" />
</template>

<script lang="ts" setup>
import type { DiligencyMenuType } from '~/data/menu/diligency.menu.type';
import { useSanityStore } from '~/stores/sanity.store';

const sanityStore = useSanityStore()
const contentStore = useContentStore()
const isEditMode = ref(false)
const isCollapsed = ref(false)
const menusList = ref([] as DiligencyMenuType[])

const currentparentId = computed(() => contentStore.currentSubMenu?._id)

onMounted(async () => {
    menusList.value = await sanityStore.GetMenuListAsync()
    contentStore.currentSubMenu = menusList.value?.[0]
    contentStore.menusList = menusList.value
})

</script>