<script setup lang="ts">
import SmoothScroll from './layouts/smooth-scroll.vue';
import { useLoaderStore } from './stores/loader.store';

const loader = useLoaderStore()
const loading = computed(() => loader.loading)

</script>

<template>
  <section class="w-full">
    <NavigationTop />
    <SmoothScroll>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </SmoothScroll>
  </section>
  <LoadingFullPage v-if="loading" />
</template>