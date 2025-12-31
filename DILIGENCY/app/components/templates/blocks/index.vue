<template>
    <component :is="GetTemplate(item.template ?? '')" v-for="(item, index) in data" :key="index" :data="item" />
</template>
<script setup lang="ts">
import { useContentStore } from '~/stores/content.store';
import { GetBlockTemplate } from '~/utils/helpers/component';
import type { BlockType } from '~/utils/types/block.type';

const { locale } = useI18n()
const contentStore = useContentStore()
const data = computed(() => contentStore.contentData?.blocks as Array<BlockType>)

const GetTemplate = (type: string) => {
    return GetBlockTemplate(type.toLowerCase())
}
</script>