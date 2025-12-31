<template>
    <div v-if="props.list && props.list.length > 0">
        FOOTER
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ list?: any[] }>()
</script>
