<template>
    <div class="mt-10 w-full">
        <!-- {{ navigationStore.currentNavigation }} -->
        <TemplatesTablePage v-if="navigationStore.currentNavigation?.type == (PAGES_KEY as any)" />
        <TemplatesTableUser v-if="navigationStore.currentNavigation?.type == (ADMIN_USER_KEY as any)" />
        <TemplatesTableSection v-if="navigationStore.currentNavigation?.type == (SECTION_KEY as any)" />
        <TemplatesTableMenu v-if="navigationStore.currentNavigation?.type == (MENU_KEY as any)" />
    </div>
</template>
<script lang="ts" setup>
import { MENU_KEY, SECTION_KEY } from '~/stores/navigation.store';

const navigationStore = useNavigationStore()
</script>