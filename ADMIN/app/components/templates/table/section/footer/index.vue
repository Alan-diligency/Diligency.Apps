<script setup lang="ts">
import type { UpdateParameter } from '~/helpers/dto/requests'
import { useFooterStore } from '~/stores/footer.store'

const navigationStore = useNavigationStore()
const footerStore = useFooterStore()

const data = computed(() => footerStore.footers)

watch(
    () => navigationStore.currentNavigation?.key,
    async (currentKey) => {
        if (currentKey && navigationStore.currentNavigation?.type == SECTION_KEY as any) {
            await footerStore.GetFooters() as any
        }
    },
    { immediate: true }
)

const isVisibile = computed(() => navigationStore.currentNavigation?.key == SECTION_FOOTER_KEY)

const parameter = computed(() => {
    const key = navigationStore.currentNavigation?.key
    const id = 'footer'

    return {
        parentId: id,
        key: key,
        patch: '',
        value: null
    } as UpdateParameter
})

const getParameter = (key: string) => {
    return {
        ...parameter.value,
        patch: `${key}`
    }
}
</script>

<template>
    <section class="mt-2 w-full bg-gray-400 rounded-xl p-2" v-if="isVisibile">
        <div class="w-full relative transition-all duration-250">
            <div class="py-2">
                FOOTER
            </div>
            <UCollapsible :defaultOpen="true" class="flex flex-col gap-2 w-full">
                <div class=" w-7 absolute top-1 right-4 z-10">
                    <ToolButtonToggle />
                </div>
                <template #content>
                    <div class="flex flex-col gap-2 w-full">
                        <WidgetsString displayText="city" :item="data?.city" :parameter="getParameter('city')" />
                        <WidgetsString displayText="email" :item="data?.email" :parameter="getParameter('email')" />
                        <WidgetsString displayText="postalCode" :item="data?.postalCode"
                            :parameter="getParameter('postalCode')" />
                        <WidgetsString displayText="vision" :item="data?.vision" :parameter="getParameter('vision')" />
                        <WidgetsLocaleItem displayText="title" :item="data?.title" :parameter="getParameter('title')"
                            :actions="['edit']" />
                        <WidgetsLocaleItem displayText="subtitle" :item="data?.subtitle"
                            :parameter="getParameter('subtitle')" :actions="['edit']" />
                    </div>
                </template>
            </UCollapsible>
        </div>
    </section>
</template>