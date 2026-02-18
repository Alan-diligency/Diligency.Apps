<template>
    <div class="flex flex-col gap-2 text-lg bg-gray-200 p-2 rounded-md">
        <FormsString v-for="(item, index) in items" :index="index" :value="item" />
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    items: {
        type: Array,
        default: null
    },
    fieldPath: {
        type: String,
        default: ''
    }
})
</script>