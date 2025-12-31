<template>
    <ContentHeader />
    <div class="mt-4">
        <component :is="currentPage" v-if="currentPage" />
    </div>
</template>

<script lang="ts" setup>
import { markRaw, shallowRef, watch } from 'vue';
import { useMenuStore } from '~/stores/menu.store';
import { SwitchCurrentPageContent } from './content-manager';

const menuStore = useMenuStore()

const currentPage = shallowRef<any>(null)

watch(
    () => menuStore.currentMenu.key,
    (newKey) => {
        const comp = SwitchCurrentPageContent(newKey.toLowerCase())
        currentPage.value = comp ? markRaw(comp) : null
    },
    { immediate: true }
)
</script>
