<template>
    <LoaderStaticLoader :is-loading="!data" />
    <div v-if="data">
        <ContentWebManagementPagesTab @update-tab="onTabUpdate" :tabs="tabs" />
        <div class="py-2 space-y-4">
            <ContentWebManagementPagesTablesHero :excluded-keys="['_key']" :data="currentPage?.hero" />
            <ContentWebManagementPagesTablesBlock :excluded-keys="['_key']" :list="currentPage?.blocks" />
            <ContentWebManagementPagesTablesFooter :list="currentPage?.footer" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid';
import type { PageTabType } from './tab.vue';
const currentPage = ref<any>()
const sanityStore = useSanityStore()
const data = ref<Array<any>>([])
const tabs = computed(() => {
    const list: PageTabType[] = []
    data.value.forEach(element => {
        const parts = element._id.split('_')
        let left = parts[0] || ''
        let right = parts[1] || ''

        let parentName: string
        let childName: string | undefined
        let parentKey: string = element._key

        if (!left && right) {
            // _child → right becomes parent
            parentName = right
            childName = undefined
        } else if (left && !right) {
            // parent_ → left is parent
            parentName = left
            childName = undefined
        } else if (left && right) {
            // normal case
            parentName = left
            childName = right
        } else {
            // edge case, empty _id
            parentName = 'unknown'
            childName = undefined
        }

        // Find or create parent
        let parent = list.find(p => p.name === parentName)
        if (!parent) {
            parent = { name: parentName, key: parentKey, children: [] }
            list.push(parent)
        }

        if (childName) {
            parent.children.push({ name: childName, key: element._key, children: [] })
        }
    })

    list.forEach(element => {
        if (element.children.length > 0) {
            element.key = uuidv4()
        }
    });

    return list;
})

const onTabUpdate = (tab: PageTabType) => {
    currentPage.value = data.value.find(x => x._key == tab.key)
    console.log(tab)
}

onMounted(async () => {
    await refresh()
})

const refresh = async () => {
    data.value = await sanityStore.GetPagesDataAsync() as Array<any>
}
</script>