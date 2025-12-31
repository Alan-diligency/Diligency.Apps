<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    editMode: {
        type: Boolean,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    error: {
        type: String,
        required: false
    }
})

const emit = defineEmits(['update:modelValue'])
const hasError = computed(() => props.error && props.error.length > 0)
</script>

<template>
    <div class="relative">
        <textarea :disabled="!props.editMode" :placeholder="props.placeholder" :value="props.modelValue"
            @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)" :class="[
                'w-90 min-h-32 p-2 rounded-md border bg-primary text-tertiary/80 transition-all',

                // Padding (no icon)
                props.editMode ? 'pl-3' : 'pl-3',

                // Disabled style
                !props.editMode
                    ? 'bg-none text-gray-500 border-transparent cursor-default'

                    // Error style
                    : hasError
                        ? 'border-red-500 focus:border-red-600 bg-red-500/5'

                        // Normal editable style
                        : 'border-gray-400 bg-gray-200'
            ]"></textarea>

        <div class="text-red-500/70 text-xs px-1 pt-1 text-left" v-if="hasError">
            {{ props.error }}
        </div>
    </div>
</template>
