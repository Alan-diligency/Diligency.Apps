<template>
    <LoaderStaticLoader :is-loading="!data" />
    <div class="p-2 bg-gray-200 flex flex-col gap-4" v-if="data">
        <TableParent @get-result="refresh" :excludedKeys="parentExcludedKeyes" :data="data" />
    </div>
</template>
<script lang="ts" setup>

const sanityStore = useSanityStore()
const data = ref()
const parentExcludedKeyes = ["_createdAt", "_id", "_rev", "_type", "_updatedAt", "_key", "parentId"]

onMounted(async () => {
    await refresh()
})

const refresh = async () => {
    var result = await sanityStore.GetGenericData("footer") as Array<any>
    data.value = result[0]
}
</script>