<template>
    <div :class="['space-y-4 py-4 text-center md:text-left ', customClass()]" v-if="subtitle">
        <p v-for="(item, index) in subtitle" :key="index" class="text-lg">
            {{ item?.[locale] }}
        </p>
    </div>
</template>
<script lang="ts" setup>
import type { LocaleType } from '~/utils/types';
const { locale } = useI18n()
const props = defineProps({
    subtitle: {
        type: [Array] as PropType<LocaleType | LocaleType[]>,
        required: false,
        default: null
    },

    customClass: {
        type: String as PropType<string>,
        required: false,
    },
})

const customClass = () => {
    return props.customClass ?
        props.customClass : "text-tertiary-500/80"
}
</script>