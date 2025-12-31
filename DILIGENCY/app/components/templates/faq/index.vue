<template>
    <PageLayout custom-class="bg-primary py-10" v-if="data?.items">
        <div class="w-full h-full p-2 pb-4">
            <SectionContentTitle :title="[{ en: 'FAQ', fr: 'FAQ' }]" />
        </div>

        <div class="flex flex-col w-full gap-2 py-0">
            <div v-for="(item, index) in data?.items" :key="index" class="w-full h-auto text-left">
                <div @click="toggleFAQ(index)"
                    class="p-2 transition-all duration-500 border rounded-md cursor-pointer border-secondary-500 hover:bg-secondary-500/50">
                    <div class="flex items-center justify-between w-full">
                        <div class="flex items-center w-full text-lg font-bold inter text-tertiary-500 min-h-14">
                            {{ item.question[locale] }}
                        </div>
                        <Icon name="lucide-chevron-right"
                            class="transition-transform duration-300 transform size-6 text-tertiary-500"
                            :class="{ 'rotate-90': openStates[index] }" />
                    </div>

                    <Transition name="faq">
                        <div v-show="openStates[index]"
                            class="overflow-hidden text-secondary-800 text-md font-normal px-2">
                            {{ item.response[locale] }}
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </PageLayout>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import PageLayout from '~/layouts/page-layout.vue'
import { useContentStore } from '~/stores/content.store'

const { locale } = useI18n()
const contentStore = useContentStore()

const data = computed(() => contentStore.contentData?.faq ?? [])
const openStates = ref<boolean[]>([])

onMounted(() => {
    onMounted(() => {
        if (Array.isArray(data.value)) {
            openStates.value = data.value.map(() => false)
        }
    })
})

const toggleFAQ = (index: number) => {
    openStates.value[index] = !openStates.value[index]
}
</script>

<style scoped>
.faq-enter-active,
.faq-leave-active {
    transition: all 0.4s ease;
    max-height: 200px;
    opacity: 1;
}

.faq-enter-from,
.faq-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>
