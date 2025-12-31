<template>
    <section class="relative w-full h-auto px-4 py-10 md:px-10 2xl:px-35 md:py-20">
        <div class="absolute top-0 left-0 size-full z-0">
            <video class="size-full object-cover" autoplay muted loop playsinline>
                <source :src="props.data?.background" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div class="absolute inset-0 bg-black/50"></div>
        </div>
        <div class="flex flex-col w-full md:flex-row">
            <div class="flex flex-col w-full">
                <div :class="['z-10 flex gap-3 text-4xl font-semibold']">
                    <div :class="['min-w-[10px] max-w-[10px] rounded-full bg-secondary-500']"></div>
                    <div class="w-full text-secondary-500">
                        <div v-for="(item, index) in props.data?.title" :key="index">
                            {{ item?.[locale] }}
                        </div>
                    </div>
                </div>
                <div :class="['w-full text-xl leading-7  z-10 text-secondary-500 py-5']">
                    {{ props.data?.text?.[locale] }}
                </div>
            </div>
            <div class="flex flex-col items-center justify-center w-full gap-2 px-4 py-5 opacity-90 ">
                <component :is="getCta(item?.type)" v-for="(item, index) in props.data?.cta" :key="index"
                    :data="item" />
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
        type: Object as PropType<FooterType>,
    }
})

const getCta = (type: string) => {
    return GetCtaTemplate(type)
}

</script>