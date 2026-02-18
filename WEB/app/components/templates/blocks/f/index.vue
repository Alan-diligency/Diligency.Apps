<template>
    <PageLayout custom-class="bg-primary py-10">
        <div class="w-full h-full p-2">
            <SectionContentTitle :title="props.data?.title" />
            <SectionContentSubtitle :subtitle="props.data?.subtitle" custom-class="w-full text-tertiary-500/80" />
        </div>
        <div class="w-full flex flex-col md:flex-row gap-5 md:gap-10" v-for="(item, index) in items" :key="index">
            <div v-for="(list, index) in item.list" :key="index"
                class="w-full card group hover:scale-102 hover:bg-secondary border-1 border-tertiary transition-all duration-300 cursor-pointer bg-gray-100 p-4 rounded-lg">
                <div class="text-center flex flex-col items-center justify-center">
                    <div class="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-4 transition-fast"
                        v-if="list.icon">
                        <Icon :name="list.icon ?? ''" class="h-16 w-16 text-accent-200" />
                    </div>
                    <h3 class="text-tertiary text-lg font-semibold mb-3">{{ list?.name?.[locale] }}</h3>
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import PageLayout from '~/layouts/page-layout.vue';
import type { BaseType } from '~/utils/types/block.type';
import { BLOCK_PROPS } from '../props';


const { locale } = useI18n()
const props = defineProps(BLOCK_PROPS)
const items = computed(() => props.data?.items as BaseType[])
</script>