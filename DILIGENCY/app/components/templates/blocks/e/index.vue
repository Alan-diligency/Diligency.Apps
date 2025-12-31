<template>
    <PageLayout custom-class="bg-primary py-10">
        <div class="w-full h-full p-2">
            <SectionContentTitle :title="props.data?.title" />
            <SectionContentSubtitle :subtitle="props.data?.subtitle" custom-class="w-full text-tertiary-500/80" />
        </div>
        <div class="w-full flex flex-col md:flex-row gap-5 md:gap-10">
            <div class="group text-xl cursor-pointer" v-for="(item, index) in items" :key="index">
                <div class="font-bold text-xl text-left text-secondary-800 pb-10 lowercase first-letter:uppercase">
                    {{item?.title?.map(t => t[locale]).join(" ")}}
                </div>
                <div class="py-1 text-lg w-full" v-for="(list, index) in item.list" :key="index">
                    <div class="inline-flex gap-2 items-start justify-start">
                        <Icon :name="list?.icon ?? ''" class="size-8 min-h-8 min-w-8 text-secondary-700" />
                        <span class="text-tertiary-500 text-md">{{ list.name?.[locale] }}</span>
                    </div>
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