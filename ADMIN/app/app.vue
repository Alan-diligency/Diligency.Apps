<template>
  <div>
    <NuxtLayout>
      <MainApp v-if="appStore.isAppReady" />
      <div v-else>
        <div style="z-index: 9999999 !important;" class="fixed inset-0 flex items-center justify-center bg-white">
          <div class="flex flex-col items-center justify-center gap-2">
            <h1 class="text-2xl uppercase font-bold text-gray-500 border-b">Diligency Admin</h1>
            <div class="flex items-center gap-2 text-gray-800">
              <Icon name="lucide:loader-circle" size="30" class="animate-spin" />
              <span class="font-medium">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>


</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app.store'
const appStore = useAppStore()

onMounted(() => {
  requestAnimationFrame(() => {
    appStore.setReady()
  })
})
</script>
