<template>
    <!-- Local Text (Single Locale Object) -->
    <div v-if="isObjectOfLocale(props.data)" class="pt-2 w-full flex gap-2">
        <div class="bg-gray-200 flex flex-col p-2 w-full">
            <label for="fr">FR</label>
            <textarea class="bg-gray-200 min-h-25" v-model="(localValues[0] as any).fr"></textarea>
        </div>
        <div class="bg-gray-200 flex flex-col p-2 w-full">
            <label for="en">EN</label>
            <textarea class="bg-gray-200 min-h-25" v-model="(localValues[0] as any).en"></textarea>
        </div>
    </div>

    <!-- Array of Locale Texts -->
    <div v-if="isArrayOfLocale(props.data)" class="pt-2 w-full flex gap-2">
        <div v-for="(locale, index) in props.data" :key="index" class="w-full flex gap-2">
            <div class="bg-gray-200 flex flex-col p-2 w-full">
                <label :for="'fr-' + index">FR</label>
                <textarea class="bg-gray-200 min-h-25" v-model="(localValues[index] as any).fr"
                    :id="'fr-' + index"></textarea>
            </div>
            <div class="bg-gray-200 flex flex-col p-2 w-full">
                <label :for="'en-' + index">EN</label>
                <textarea class="bg-gray-200 min-h-25" v-model="(localValues[index] as any).en"
                    :id="'en-' + index"></textarea>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { isArrayOfLocale, isObjectOfLocale } from '../view-manager';
import { TABLE_VIEWS_PROPS } from '../views/views.prop';

const props = defineProps(TABLE_VIEWS_PROPS);

// Initialize localValues based on whether props.data is an array or an object
const localValues = ref(
    Array.isArray(props.data)
        ? props.data.map((item) => ({ fr: item.fr ?? '', en: item.en ?? '' }))  // For arrays of locales
        : [{ fr: (props.data as any)?.fr ?? '', en: (props.data as any)?.en ?? '' }]  // For a single locale object
);

const emit = defineEmits<{
    (e: 'update:localeModelValue', value: { fr: string; en: string } | { fr: string; en: string }[]): void;
}>();

// Watch for changes in `localValues` and emit the updated value
watch(localValues, (newValue) => {
    emit('update:localeModelValue', newValue);
}, { deep: true });
</script>
