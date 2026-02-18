<script setup lang="ts">
import { useConverter } from '~/composable/useConverter';
import { useTypeCheck } from '~/composable/useTypeCheck';
import { PROPS } from './props';

const props = defineProps(PROPS)
const { ConvertIcon } = useConverter()
const { isString } = useTypeCheck()
const data = computed(() => props.item)
</script>

<template>
    <div class="w-full flex flex-col justify-between items-center bg-gray-200 rounded-md p-2 relative"
        v-if="isString(data) && data !== ''">
        <div class="w-full border-b border-gray-300 text-sm font-bold flex justify-between items-center">
            {{ props.displayText }}
            <div>
                <WidgetsStringModal :icon="props.icon" :displayText="props.displayText" :item="data"
                    :parameter="props.parameter" />
            </div>
        </div>
        <div class="w-full text-gray-700 bg-gray-300 p-2" :class="props.icon ? 'flex flex-row gap-1 items-center' : ''">
            <UIcon :name="ConvertIcon(props.icon)" class="size-6" v-if="props.icon" />
            <div class="w-full">
                {{ data }}
            </div>
        </div>
    </div>
</template>
