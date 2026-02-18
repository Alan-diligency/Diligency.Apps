<template>
    <div v-if="appStore.isLoading"
        class="absolute size-full bg-gray-200/90 top-0 left-0 flex items-center justify-center rounded-md">
        <UIcon name="i-lucide-loader" class="size-10 animate animate-spin" />
    </div>
</template>
<script lang="ts" setup>
const appStore = useAppStore()
</script>