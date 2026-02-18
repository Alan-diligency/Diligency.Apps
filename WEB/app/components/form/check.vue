<template>
    <label for="" :class="props.labelClass" v-if="props.label">{{ props.label }}</label>
    <div class="pt-4 w-full flex flex-col gap-1">
        <div v-for="(item, key) in (props.radio as RadioOption[])" :key="key" class="w-full">
            <div class="inline-flex gap-2 text-white font-semi-bold cursor-pointer" @click="toggleSelection(item)">
                <div class="relative transition-all duration-200 flex items-center justify-center w-6 h-6">
                    <div class="w-6 h-6 rounded-full aspect-square bg-primary border-2 border-tertiary"></div>
                    <div class="w-3 h-3 rounded-full aspect-square bg-tertiary absolute" v-if="isSelected(item)"></div>
                </div>
                <div class="w-full text-lg" :class="props.labelClass">
                    {{ (item as any)?.label?.[locale] }}
                </div>
            </div>
        </div>
        <div class="py-2" v-if="props.custom">
            <FormInput v-model="customInput" :placeholder="props.custom" type="text" label-class="text-tertiary-500" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { RadioOption } from '~/utils/types';
import { BASE_PROPS } from './data/props';

const { locale } = useI18n();
const props = defineProps({
    ...BASE_PROPS,
    ...{
        modelValue: {
            type: String,
            default: ''
        },
    }
})

const customInput = ref<string>("")
const emit = defineEmits<{ (e: 'update:modelValue', value: any): void }>();

const selectedItems = ref<RadioOption[]>([]);
const formatedItems = ref<string>('')

watch(customInput, (newValue) => {
    formatedItems.value = `${selectedItems.value.map(item => item._key).join('|')} | ${newValue}`;
    // Emit the updated string to the parent
    emit('update:modelValue', removeSpaces(formatedItems.value));
});


const toggleSelection = (item: RadioOption) => {
    const index = selectedItems.value.findIndex(i => i._key === item._key);
    if (index !== -1) {
        selectedItems.value.splice(index, 1); // Deselect
    } else {
        selectedItems.value.push(item); // Select
    }
    // Update formatedItems by joining selected _key values and appending customInput
    formatedItems.value = `${selectedItems.value.map(item => item._key).join('|')} | ${customInput.value}`;
    emit('update:modelValue', removeSpaces(formatedItems.value)); // Emit updated value
};

const isSelected = (item: RadioOption) => {
    /**
     * Function to check if an item is selected.
     * Returns true if the item is selected, false otherwise.
     */
    return selectedItems.value.some(i => i._key === item._key);
};

const removeSpaces = (data: string): string => {
    return data.replace(/\s*\|\s*/g, '|')
}
</script>
