v-for="(item, index) in props.title" :key="index"

<template>
    <div v-for="(item, index) in props.subtitle" :key="index"
        class="text-xl font-regular text-tertiary/70 w-full md:w-[500px] text-center md:text-left">
        {{ item?.[locale] }}
    </div>
</template>
<script lang="ts" setup>
import type { LocaleType } from '~/utils/types';
const { locale } = useI18n()
const props = defineProps({
    subtitle: {
        type: [Array] as PropType<LocaleType[]>,
        required: false,
        default: null
    },
})
</script>