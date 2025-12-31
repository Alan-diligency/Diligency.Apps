<template>
    <div v-if="isLoading"
        class="absolute top-0 left-0 bg-black/50 size-full rounded-b-md flex flex-col gap-2 items-center justify-center">
        <Icon name="lucide:loader" class="size-10 text-white animate animate-spin" />
        <span class="text-white">Chargement</span>
    </div>
</template>
<script lang="ts" setup>
const sanityStore = useSanityStore()
const isLoading = computed(() => sanityStore.isLoading)
</script>