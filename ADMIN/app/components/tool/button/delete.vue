<template>
    <div class="absolute top-0 right-3">
        <UButton :label="props.text" @click="emit('clicked')" icon="i-lucide-trash" size="md" color="error"
            variant="solid" class="cursor-pointer" />
    </div>
</template>
<script lang="ts" setup>
const props = defineProps(
    {
        text: {
            type: String,
            required: true,
            default: ''
        }
    }
)
const emit = defineEmits<{
    (e: 'clicked'): void
}>()
</script>