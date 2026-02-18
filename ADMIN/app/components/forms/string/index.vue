<script setup lang="ts">
import { useConverter } from '~/composable/useConverter';
import { TABLE_PROPS } from '../table-props';
const props = defineProps(TABLE_PROPS)
const { ConvertIcon } = useConverter()

const isVisible = computed(() => typeof props.value === "string" && props.value !== "")
</script>

<template>
    <div class="w-full flex flex-col justify-between items-center bg-gray-200 rounded-md p-2 relative" v-if="isVisible">
        <div class="w-full border-b border-gray-300 text-sm font-bold flex justify-between items-center">
            {{ field }}
            <div>
                <FormsStringModal :icon="icon" :field="field" :value="value" :path="path" :query="props.query" />
            </div>
        </div>
        <div class="w-full text-gray-700 flex flex-row gap-1 items-center py-2">
            <UIcon :name="ConvertIcon(props.icon)" class="size-6" v-if="props.icon" />
            {{ value }}
        </div>
    </div>
</template>
