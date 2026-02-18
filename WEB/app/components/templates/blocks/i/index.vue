<template>
    <PageLayout custom-class="bg-primary py-10">

        <div class="w-full h-full p-2">
            <SectionContentTitle :title="props.data?.title" />
            <SectionContentSubtitle :subtitle="props.data?.subtitle"
                custom-class="w-full md:w-1/2 text-tertiary-500/80" />
        </div>
        <div class="w-full mx-auto md:w-2/3">
            <section class="text-gray-600 body-font overflow-hidden px-4 md:px-0">
                <div class="flex flex-col md:flex-row -m-4">
                    <TemplatesBlocksICard v-for="(item, index) in props.data?.items" :key="index"
                        :data="(item as any)" />
                </div>
            </section>
        </div>
    </PageLayout>
</template>

<script lang="ts" setup>
import PageLayout from '~/layouts/page-layout.vue';
import { BLOCK_PROPS } from '../props';
const props = defineProps(BLOCK_PROPS)
</script>