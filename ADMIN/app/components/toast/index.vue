<template>
    <div v-if="isVisible" id="toast-default"
        class="flex items-center w-full max-w-xs p-4 text-body bg-white rounded-base shadow-xs border fixed bottom-5 right-5 z-50"
        :class="data?.type === 'success' ? 'border-green-500' : data?.type === 'error' ? 'border-red-500' : 'border-fg-brand'"
        role="alert">
        <Icon
            :name="data?.type === 'success' ? 'lucide:circle-check' : data?.type === 'error' ? 'lucide:circle-x' : ':lucide:info'"
            :class="data?.type === 'success' ? 'text-green-500' : data?.type === 'error' ? 'text-red-500' : 'text-fg-brand'"
            class="w-5 h-5" />
        <div class="ms-2.5 text-sm border-s border-default ps-3.5">{{ data?.message }}</div>
        <button type="button"
            class="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none"
            data-dismiss-target="#toast-default" aria-label="Close">
            <span class="sr-only">Close</span>
            <icon name="close" class="w-3 h-3" />
        </button>
    </div>
</template>
<script lang="ts" setup>
import { useToastStore } from '~/stores/toast.store';

const toastStore = useToastStore();

const isVisible = computed(() => toastStore.isVisible);
const data = computed(() => toastStore.data);

</script>