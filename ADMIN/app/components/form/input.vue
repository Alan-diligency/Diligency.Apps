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
    },
    icon: {
        type: String,
        required: false
    }
})

const emit = defineEmits(['update:modelValue'])
const hasError = computed(() => props.error && props.error.length > 0)
</script>

<template>
    <div class="relative">
        <input :disabled="!props.editMode" :placeholder="placeholder" autocomplete="off" :value="modelValue"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" :class="[
                'w-90 h-10 p-1 border border-gray-400 bg-primary text-tertiary/80 transition-all ',
                props.icon ? 'pl-8' : 'pl-3',
                !props.editMode
                    ? 'bg-none text-gray-500 border border-transparent '

                    : hasError
                        ? 'border-red-500 focus:border-red-600 bg-red-500/5'
                        : 'border-gray-400  bg-gray-200'
            ]" />
        <Icon :name="props.icon" v-if="props.icon" size="25" class="absolute left-1 top-2 " />

        <div class="text-red-500/70 text-xs py-1 text-left" v-if="hasError">
            {{ error }}
        </div>
    </div>
</template>
