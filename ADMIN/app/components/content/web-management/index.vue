<template>
    <component :is="currentSubPage" v-if="currentSubPage" />
</template>

<script lang="ts" setup>
import { useMenuStore } from '~/stores/menu.store';
import { SwitchCurrentSubPageContent } from '../content-manager';

const menuStore = useMenuStore()

const currentSubPage = computed(() => {
    let key = menuStore.currentSubMenu?.key
    return SwitchCurrentSubPageContent(key?.toLocaleLowerCase() ?? '')
})
</script>