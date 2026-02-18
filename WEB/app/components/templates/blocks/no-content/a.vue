<template>
    <PageLayout custom-class="bg-primary py-10">
        <div class="w-full h-full p-2">
            <SectionContentTitle :title="props.data?.title" />
            <SectionContentSubtitle :subtitle="props.data?.subtitle" custom-class="w-full text-tertiary-500/80" />
        </div>
    </PageLayout>
</template>

<script lang="ts" setup>
import PageLayout from '~/layouts/page-layout.vue';
import { BLOCK_PROPS } from '../props';
const props = defineProps(BLOCK_PROPS)
</script>