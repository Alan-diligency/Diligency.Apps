<template>
    <UDashboardGroup>
        <UDashboardSidebar>
            <template #header>
                <TemplatesAppTitle />
            </template>
            <template #default="{ collapsed }">
                <UNavigationMenu :collapsed="collapsed" :items="navigationStore.menuData" orientation="vertical" />
            </template>
            <template #footer="{ collapsed }">

                <div class="w-full border-t border-gray-200">
                    <UButton color="neutral" variant="soft" class="w-full cursor-pointer" :block="collapsed" size="xl">
                        <UIcon name="i-lucide-circle-user-round" class="size-6" />
                        <span>{{ `${user?.firstName?.toUpperCase()}` }}</span>
                    </UButton>
                </div>
            </template>
        </UDashboardSidebar>
        <div class="w-full overflow-scroll relative">
            <TemplatesBreadcumb />
            <slot />
        </div>
    </UDashboardGroup>
</template>
<script setup lang="ts">
import { useNavigationStore } from '~/stores/navigation.store';

const navigationStore = useNavigationStore()
const authStore = useAuthStore()
const user = computed(() => authStore.persistenUser)
onMounted(async () => {
    await navigationStore.BuildNavigationAsync()
});

watch(
    () => navigationStore.currentNavigation,
    async (currentNavigation) => {
        if (!currentNavigation) {
            await navigationStore.BuildNavigationAsync()
        }
    }
)
</script>