<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoading = ref(true)

onMounted(() => {
    if (document.readyState === 'complete') {
        isLoading.value = false
    } else {
        window.addEventListener('load', () => {
            isLoading.value = false
        })
    }
})
</script>

<template>
    <div v-if="isLoading"
        class="absolute h-screen w-screen overflow-hidden bg-gray-200/90 top-0 left-0 flex items-center justify-center rounded-md">
        <UIcon name="i-lucide-loader" class="size-10 animate-spin" />
    </div>
</template>
