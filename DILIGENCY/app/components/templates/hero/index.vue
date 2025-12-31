<template>
    <PageLayout :custom-class="customClass">
        <BackgroundVideo :link="data?.background" v-if="data?.background" />
        <section class="py-4 size-full z-10">
            <div class="flex items-center justify-center py-4 size-full" :class="getTextDisposition()">
                <div class="h-full w-full flex flex-col" :class="getTextContentFlex()">

                    <h1 class="text-[2.5rem]/13 md:text-7xl/18 font-bold text-secondary tracking-normal z-10 w-full"
                        :class="getTitleContentSize()">
                        <span v-for="(item, index) in data?.title" :key="index">
                            {{ item?.[locale] }}
                        </span>
                    </h1>
                    <div class="leading-7 text-xl  z-10 text-white" :class="getSubtitleContentSize()"
                        v-if="data?.subtitle" v-for="item in data?.subtitle">
                        <p>{{ item?.[locale] }}</p>
                    </div>
                    <div class="z-20 flex flex-col items-center justify-center w-full gap-5 md:flex-row">
                        <component :is="getCta(item.type!)" v-for="(item, index) in ctas" :key="index" :data="item"
                            :custom-class="getCustomCtaClass(item.type)" />
                    </div>
                    <p class="text-2xl text-white">
                        APPS 2:
                        {{ config.public.SANITY_CLIENT_TOKEN }}
                        {{ config.public.SANITY_PROJECT_ID }}
                    </p>
                </div>
            </div>
        </section>
    </PageLayout>
</template>
<script lang="ts" setup>
import PageLayout from '~/layouts/page-layout.vue';
import { useContentStore } from '~/stores/content.store';
import { GetCtaTemplate } from '~/utils/helpers/component';
import { THEME_SETTING } from '~/utils/types/default-const';

const route = useRoute()
const { locale } = useI18n()
const contentStore = useContentStore()
const customClass = computed(() => {
    return "relative h-auto  md:min-h-screen pt-10 2xl:h-[calc(100vh-10rem)] flex items-center"
})
const data = computed(() => contentStore.contentData?.hero)
const ctas = computed(() => contentStore.contentData?.hero?.cta)

const themeSetting = computed(() => THEME_SETTING.find(x => x._id == 'hero'))
const path = computed(() => useRoute().path)
const config = useRuntimeConfig();

const getCta = (type: string) => {
    return GetCtaTemplate(type)
}

const getCustomCtaClass = (type: string) => {
    switch (type) {
        case "cta-link":
            return "text-secondary-500 hover"

        default:
            break;
    }
}

const titleAlign = computed(() => {
    var path = route.path
    const center: boolean = [
        "/home"
    ].includes(path)

    return center ? "text-center" : "text-center md:text-left"
})

const getTitleContentSize = (): string => {
    return path.value.includes('/home')
        ? "w-full md:w-5/10"
        : themeSetting.value?.TitleTextContentSize ?? 'w-full md:w-9/10';
}

const getSubtitleContentSize = (): string => {
    return themeSetting.value?.SubtitleTextContentSize ?? 'w-full md:w-2/3';
}

const getTextDisposition = (): string => {
    const rules: Array<[string[] | undefined, string]> = [
        [themeSetting.value?.pagesHasLeftText, "text-left"],
        [themeSetting.value?.pagesHasRightText, "text-right"],
        [themeSetting.value?.pagesHasCenterText, "text-center"],
    ];

    for (const [pages, disposition] of rules) {
        if (pages?.includes(path.value)) {
            return disposition;
        }
    }

    return "text-center";
};

const getTextContentFlex = (): string => {
    const rules: Array<[string[] | undefined, string]> = [
        [themeSetting.value?.pagesHasLeftText, "items-start gap-2"],
        [themeSetting.value?.pagesHasRightText, "items-end gap-2"],
        [themeSetting.value?.pagesHasCenterText, "items-center gap-2"],
    ];

    for (const [pages, flexClass] of rules) {
        if (pages?.includes(path.value)) {
            return flexClass;
        }
    }

    return "items-center gap-6";
};

</script>