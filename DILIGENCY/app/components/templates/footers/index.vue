<template>
    <component :is="GetTemplate(item.type ?? '')" v-for="(item, index) in data" :key="index" :data="item" />
</template>
<script setup lang="ts">
import { useContentStore } from '~/stores/content.store';
import { GetFooterTemplate } from '~/utils/helpers/component';
import type { FooterType } from '~/utils/types';

const { locale } = useI18n()
const contentStore = useContentStore()
const data = computed(() => contentStore.contentData?.footer as Array<FooterType>)

const GetTemplate = (type: string) => {
    return GetFooterTemplate(type.toLowerCase())
}
</script>