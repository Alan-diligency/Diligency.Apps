<template>
    <PageLayout customClass="bg-white">
        <div class="w-full min-h-screen flex justify-center items-center">
            <TemplatesApplicationSteps :data="data?.[currentStep]" />
        </div>
    </PageLayout>
</template>

<script lang="ts" setup>
import PageLayout from '~/layouts/page-layout.vue';
import { useApplicationStore } from '~/stores/application.store';
import type { ApplicationType } from '~/utils/types';

const applicationStore = useApplicationStore()
const data = ref<ApplicationType[]>()
const currentStep = computed(() => applicationStore.currentStep)
onMounted(async () => {
    data.value = await applicationStore.GetDataAsync()
})
</script>
