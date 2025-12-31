<template>
    <div>
        <label for="" :class="props.labelClass">{{ props.placeholder }}</label>
        <textarea :value="props.modelValue"
            @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)" :class="[
                'w-full min-h-28 p-1 rounded-md border-[1.5px] bg-primary',
                hasError
                    ? GetBorderClass(props.errorColor ?? 'red')
                    : 'border-tertiary/50 focus:border-tertiary'
            ]"></textarea>

        <div :class="['text-xs px-1 text-left', GetTextClass(props.errorColor ?? 'red')]" v-if="hasError">
            {{ props.error }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { GetBorderClass, GetTextClass } from './data/colors';
import { BASE_PROPS } from './data/props';

const props = defineProps({
    ...BASE_PROPS,
    ...{
        modelValue: {
            type: String,
            default: ''
        },
    }

})

const emit = defineEmits(['update:modelValue'])
const hasError = computed(() => props.error && props.error.length > 0)
</script>
