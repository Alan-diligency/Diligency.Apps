<template>
    <section class="w-full py-[1rem] mx-auto bg-secondary">
        <div class="w-full h-auto container mx-auto py-[1rem]
                         md:w-4/5 xl:w-3/5  md:text-left md:flex-col  
                                flex flex-col">
            <div class="w-full inter px-4 md:px-0 py-[3rem]">
                <PageSectionBlockTitle :title="title" />
                <h2 class="text-lg text-center md:text-left pt-4 text-tertiary/80"
                    v-html="formatMailOntext(text[locale])">
                </h2>
            </div>
            <div
                class="z-10 flex flex-col items-center justify-center md:justify-start w-full gap-5 md:flex-row px-4 md:px-0">
                <component :is="getCta(item?.type)" v-for="(item, index) in cta" :key="index" :data="item" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { GetCtaTemplate } from '~/utils/helpers/component';
import type { FooterType } from '~/utils/types';


const { locale } = useI18n();
const props = defineProps({
    data: {
        required: false,
        type: [Object, undefined] as PropType<FooterType>
    }
})

const title = computed(() => (props.data as any)?.title ?? []);
const cta = computed(() => (props.data as any)?.cta ?? []);
const text = computed(() => (props.data as any)?.text ?? null);

const getCta = (type: string) => {
    return GetCtaTemplate(type)
}

const formatMailOntext = (inputText: string) => {
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    return inputText.replace(emailRegex, '<span class="font-bold cursor-pointer underline hover:text-secondary-800 transition-all duration-500">$1</span>');
};
</script>