<template>
    <div class="p-1">
        <UButton @click="emit('clicked')" icon="i-lucide-plus" size="sm" color="success" variant="solid"
            class="cursor-pointer" />
    </div>
</template>
<script lang="ts" setup>

const emit = defineEmits<{
    (e: 'clicked'): void
}>()
</script>