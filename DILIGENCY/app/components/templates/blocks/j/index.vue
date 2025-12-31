<template>
    <PageLayout custom-class="bg-primary py-10">
        <div class="w-full h-full p-2">
            <SectionContentTitle :title="props.data?.title" />
            <SectionContentSubtitle :subtitle="props.data?.subtitle"
                custom-class="w-full md:w-1/2 text-tertiary-500/80" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="card cursor-pointer border-1 border-transparent hover:scale-105  hover:border-1 hover:border-tertiary-500 hover:bg-secondary rounded p-2 py-5 transition-all duration-300"
                v-for="(item, index) in items" :key="index">
                <TemplatesBlocksJCard :data="item" />
            </div>
        </div>
        <div class="z-10 flex flex-col items-center justify-center md:justify-start w-full gap-5 md:flex-row"
            v-if="props.data?.cta">
            <component :is="getCta(item.type)" v-for="(item, index) in props.data?.cta" :key="index" :data="item" />
        </div>
    </PageLayout>
</template>
<script lang="ts" setup>
import PageLayout from '~/layouts/page-layout.vue';
import { useArticleStore } from '~/stores/article.store';
import { GetCtaTemplate } from '~/utils/helpers/component';
import { BLOCK_PROPS } from '../props';

const articleStore = useArticleStore()
const props = defineProps(BLOCK_PROPS)
const items = ref<any[]>([])

watch(
    () => props?.data?.action,
    async (newAction) => {
        if (newAction === "getArticleList") {
            items.value = await articleStore.GetFourLastArticle()
        } else {
            items.value = []
        }
    },
    { immediate: true }
)

const getCta = (type: string) => {
    return GetCtaTemplate(type)
}
</script>
