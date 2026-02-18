<template>
    <UButton @click="emit('clicked')" color="primary" variant="outline" class="cursor-pointer z-10 uppercase">
        {{ props.text }}
    </UButton>
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