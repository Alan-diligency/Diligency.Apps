<template>
    <section class="py-5 md:py-20 bg-primary">
        <div class="flex flex-col items-center justify-center gap-4 px-4 md:px-10 2xl:px-35">
            <div class="flex flex-col w-full gap-2 py-0 text-xl font-bold text-center text-tertiary/90">
                {{ text?.[locale] }}
            </div>
            <div class="z-10 flex flex-col items-center justify-center w-full gap-5 md:flex-row">
                <component :is="getCta(item?.type)" v-for="(item, index) in cta" :key="index" :data="item" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { GetCtaTemplate } from '~/utils/helpers/component';
import type { FooterType } from '~/utils/types';


const { locale } = useI18n()
const props = defineProps({
    data: {
        required: false,
        type: [Object] as PropType<FooterType>,
    }
})

const text = computed(() => (props.data as any)?.text ?? null);
const cta = computed(() => (props.data as any)?.cta ?? []);

const getCta = (type: string) => {
    return GetCtaTemplate(type)
}
</script>