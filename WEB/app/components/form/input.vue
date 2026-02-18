<script setup lang="ts">
import { GetBorderClass, GetTextClass } from './data/colors'
import { BASE_PROPS } from './data/props'

const props = defineProps({
    ...BASE_PROPS,
    modelValue: { type: String, default: '' }
})

const emit = defineEmits(['update:modelValue'])
const hasError = computed(() => props.error && props.error.length > 0)

const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement | null
    emit('update:modelValue', target?.value ?? '')
}
</script>

<template>
    <div>
        <label :class="props.labelClass">{{ props.placeholder }}</label>
        <input v-bind="$attrs" :name="props.name" :type="type" :value="props.modelValue" autocomplete="off"
            @input="handleInput" :class="[
                'w-full h-12 p-1 rounded-md border-[1.5px] bg-primary text-tertiary/80',
                hasError ? GetBorderClass(props.errorColor ?? 'red') : 'border-tertiary/80 focus:border-tertiary'
            ]" />
        <div v-if="hasError" :class="['text-xs py-1 text-left', GetTextClass(props.errorColor ?? 'red')]">
            {{ props.error }}
        </div>
    </div>
</template>
