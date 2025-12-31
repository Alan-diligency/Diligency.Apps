<template>
    <div>
        <label for="" :class="props.labelClass">{{ props.placeholder }}</label>
        <input v-bind="$attrs" :name="props.name" v-if="type === 'text' || type === 'email'" :type="type" placeholder=""
            autocomplete="off" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" :class="['w-full h-12 p-1 rounded-md border-[1.5px] bg-primary  text-tertiary/80',
                hasError
                    ? GetBorderClass(props.errorColor ?? 'red')
                    : 'border-tertiary/80 focus:border-tertiary'
            ]" />
        <div :class="['text-xs py-1 text-left', GetTextClass(props.errorColor ?? 'red')]" v-if="hasError">
            {{ error }}
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

const emit = defineEmits(['update:modelValue']);

// Computed property to check if the field has an error
const hasError = computed(() => props.error && props.error.length > 0);

</script>
