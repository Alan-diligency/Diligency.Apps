<template>
    <LoaderStaticLoader :is-loading="!data" />
    <div class="p-2 bg-gray-200 flex flex-col gap-4" v-if="data">
        <TableParent @get-result="refresh" :excludedKeys="parentExcludedKeyes" :data="data" />
        <TableChild @get-result="refresh" :excludedKeys="childExcludedKeyes" :data="data?.form" :parentId="parentId" />
    </div>
</template>
<script lang="ts" setup>

const sanityStore = useSanityStore()
const data = ref()

const parentId = computed(() => data.value?._id)
const parentExcludedKeyes = ["_createdAt", "_id", "_rev", "_type", "_updatedAt", "children", "key", "parentId", "form", "_key"]
const childExcludedKeyes = ["_createdAt", "_id", "_rev", "_type", "_updatedAt", "children", "key", "parentId", "_key"]
onMounted(async () => {
    await refresh()
})

const refresh = async () => {
    var result = await sanityStore.GetGenericData("contact") as Array<any>
    data.value = result[0]
}
</script>