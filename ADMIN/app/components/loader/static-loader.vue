<template>
    <div v-if="isLoading" class="w-full flex flex-row gap-2">
        <Icon name="lucide:loader" size="30" class=" text-brand animate animate-spin" />
        <span class="text-brand">Chargement</span>
    </div>
</template>
<script lang="ts" setup>
const isLoading = computed(() => props.isLoading)

const props = defineProps({
    isLoading: {
        type: [Boolean, null],
        required: false,
        default: null
    },
})
</script>