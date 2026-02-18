<template>
    <section class="py-5 md:py-20 bg-primary">
        <div class="flex flex-col items-center justify-center gap-4 px-4 md:px-10 2xl:px-35">
            <div class="flex flex-col w-full gap-2 py-0 text-xl font-bold text-center text-tertiary/90">
                {{ props.text?.[locale] }}
            </div>
            <div class="z-10 flex flex-col items-center justify-center w-full gap-5 md:flex-row">
                <component :is="props.ctaA" v-if="props.ctaA" />
                <component :is="props.ctaB" v-if="props.ctaB" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { LocaleType } from '~/utils/types';

const { locale } = useI18n()

const props = defineProps({
    text: {
        required: false,
        type: Object as PropType<LocaleType>,
    },
    ctaA: {
        required: false,
        type: Object as PropType<Component>,
    },
    ctaB: {
        required: false,
        type: Object as PropType<Component>,
    }
})
</script>