<template>
    <div class="absolute -top-1 right-0">
        <UButton v-if="!state" @click="emit('hide')" icon="i-lucide-minus" size="xs" color="neutral" variant="soft"
            class="cursor-pointer" />
        <UButton v-if="state" @click="emit('show')" icon="i-lucide-plus" size="xs" color="neutral" variant="soft"
            class="cursor-pointer" />
    </div>
</template>
<script lang="ts" setup>
const props = defineProps(
    {
        state: {
            type: Boolean,
            default: false
        }
    }
)
const emit = defineEmits<{
    (e: 'hide'): void
    (e: 'show'): void
}>()
</script>