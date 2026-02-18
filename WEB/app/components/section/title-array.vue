<template>
    <div :class="['z-10 flex gap-3 text-4xl font-semibold  w-full md:w-3/4 text-tertiary/80']" v-if="title">
        <div class="text-5xl font-bold text-tertiary text-center md:text-left">
            <div v-for="(item, index) in props.title" :key="index">
                {{ item?.[locale] }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { LocaleType } from '~/utils/types';
const { locale } = useI18n()
const props = defineProps({
    title: {
        type: [Array] as PropType<LocaleType[]>,
        required: false,
        default: null
    },
})
</script>