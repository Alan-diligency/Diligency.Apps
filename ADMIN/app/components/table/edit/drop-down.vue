<template>
    <div class="flex flex-col w-full bg-gray-200 p-2">
        <select v-model="selectedItem" id="color-dropdown" class="p-2">
            <option v-for="(item, index) in (props.items as any)" :key="index" :value="item">
                {{ item === true ? 'OUI' : item === false ? 'NON' : item.charAt(0).toUpperCase() + item.slice(1) }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        required: true,
        default: () => []
    },
    default: {
        type: [String, Boolean],
        required: true,
        default: ''
    },
});

const emit = defineEmits<{
    (e: 'update:selectItem', value: any): void;
}>();

const selectedItem = ref(props.default || props.items[0]);

watch(() => props.items, (newItems) => {
    if (!selectedItem.value && newItems.length > 0) {
        selectedItem.value = newItems[0];
    }
}, { immediate: true });

watch(() => selectedItem.value, (newValue) => {
    emit('update:selectItem', newValue);
}, { immediate: true });

</script>
