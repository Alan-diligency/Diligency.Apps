<template>
    <div>
        <TemplatesHero />
        <TemplatesBlocks />
        <TemplatesFaq />
        <TemplatesFooters />
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useContentStore } from '~/stores/content.store'

const contentStore = useContentStore()
const route = useRoute()

onMounted(async () => {
    const data = await contentStore.GetContentAsync(route.params.content, route?.params?.slug)
    contentStore.SetContentData(data)
})
</script>
