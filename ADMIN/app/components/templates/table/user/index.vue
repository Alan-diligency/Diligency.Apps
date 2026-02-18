<template>
    <section class="mt-2 w-full bg-gray-300 rounded-xl">
        <div class="bg-gray-100 p-2 rounded-xl border border-gray-300">
            <UTable :data="data" :columns="tableColums" class=" w-full" :loading="userStore.isLoading"
                loading-color="primary" loading-animation="carousel" />
        </div>
    </section>
</template>
<script lang="ts" setup>
import { columns } from './column'

const data = ref<any>([])
const navigationStore = useNavigationStore()
const userStore = useUserStore()
const tableColums = computed(() => columns)
watch(
    () => navigationStore.currentNavigation?.key,
    async (currentKey) => {
        if (currentKey && navigationStore.currentNavigation?.type == ADMIN_USER_KEY as any) {
            data.value = await userStore.GetUsersASync()
        }
    },
    { immediate: true }
)
</script>