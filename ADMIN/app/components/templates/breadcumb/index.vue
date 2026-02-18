<template>
    <div class="fixed w-full bg-white top-0 p-2 z-50 border-b border-gray-300">
        <UBreadcrumb :items="navigationStore.breadcrumbItems" />
    </div>
</template>
<script setup lang="ts">
const navigationStore = useNavigationStore()
</script>