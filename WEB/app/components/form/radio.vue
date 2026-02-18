<template>
    <label for="" :class="props.labelClass" v-if="props.label">{{ props.label }}</label>
    <div class="pt-4 w-full flex justify-between" :class="props.radioLayout">
        <div v-for="(item, key) in (props.radio as RadioOption[])" :key="key" class="w-full">
            <div class="inline-flex gap-2 text-white font-semi-bold cursor-pointer" @click="select(item)">
                <div class="relative transition-all duration-200 flex items-center justify-center w-6 h-6">
                    <div class="w-6 h-6 rounded-full aspect-square bg-primary border-2 border-tertiary"></div>
                    <div class="w-3 h-3 rounded-full aspect-square bg-tertiary absolute"
                        v-if="item._key == selected?._key"></div>
                </div>
                <div class="w-full text-lg" :class="props.labelClass">
                    {{ (item as any)?.label?.[locale] }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { RadioOption } from '~/utils/types';
import { BASE_PROPS } from './data/props';

const { locale } = useI18n()

const props = defineProps({
    ...BASE_PROPS,
    ...{
        modelValue: {
            type: String,
            default: ''
        },
    }

})

const emit = defineEmits<{ (e: 'update:modelValue', value: any): void }>();
const selected = ref<RadioOption>()
onMounted(() => {
    selected.value = props.radio?.find((x: any) => x.default == true) ?? props.radio?.[0] ?? {} as any
    emit('update:modelValue', selected.value?._key);
})

const select = (item: RadioOption) => {
    selected.value = item
    emit('update:modelValue', item._key);
};


</script>
