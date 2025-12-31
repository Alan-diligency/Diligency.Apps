<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{
    error: NuxtError
}>()
</script>
<template>
    <div class="error-page h-screen flex flex-col justify-center items-center bg-tertiary gap-4">
        <Icon name="lucide:brain-circuit" class="size-20 text-primary animate-pulse" size="45" />
        <h2 class="text-secondary text-3xl mt-4" v-if="props.error.statusCode === 404">Oops, page not found.</h2>
        <h2 class="text-secondary text-3xl mt-4" v-else>Something went wrong.</h2>
        <NuxtLink to="/" class="mt-8 px-4 py-2 text-secondary rounded bg-primary">Go back home</NuxtLink>
    </div>
</template>
