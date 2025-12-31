<template>
    <div :class="['z-10 flex gap-3 text-4xl font-semibold  w-full md:w-3/4 text-tertiary/80 lowercase first-letter:uppercase']"
        v-if="title">
        <div :class="['hidden md:block min-w-[10px] max-w-[10px] rounded-full', props.customClass]"></div>
        <div class="w-full text-center md:text-left lowercase first-letter:uppercase">
            <div v-for="(item, index) in title" :key="index">
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

    customClass: {
        type: String as PropType<string>,
        required: false,
        default: "bg-tertiary-500/80"
    },
})
</script>