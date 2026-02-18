<template>
    <section class="mt-2 w-full bg-gray-400 rounded-xl p-2">
        <div class="w-full relative transition-all duration-250">
            <div class="py-2">
                HERO
            </div>

            <UCollapsible :defaultOpen="true" class="flex flex-col gap-2 w-full">
                <div class=" w-7 absolute top-1 right-4 z-10">
                    <ToolButtonToggle />
                </div>
                <template #content>
                    <div v-for="(item, index) in items" :key="index" class="p-2 bg-gray-50">
                        <WidgetsString :displayText="item.key" :item="item.value" :parameter="getParameter(item.key)" />
                        <WidgetsCtaItems :displayText="item.key" :items="item.value" :actions="['edit', 'delete']"
                            :parameter="getParameter(item.key)" />
                        <WidgetsLocaleItems :displayText="item.key" :items="item.value" :item="item.value"
                            :actions="['edit', 'delete']" :parameter="getParameter(item.key)" />
                    </div>
                </template>
            </UCollapsible>
        </div>
    </section>
</template>
<script setup lang="ts">
import { useConverter } from '~/composable/useConverter';
import type { UpdateParameter } from '~/helpers/dto/requests';

const { ConvertObjetcToArray } = useConverter()
const navigationStore = useNavigationStore()
const props = defineProps({
    data: {
        type: Object,
        default: null
    },
})

const items = computed(() => ConvertObjetcToArray(props.data ?? {}))

const parameter = computed(() => {
    const key = navigationStore.currentNavigation?.key
    const id = [
        navigationStore.currentNavigation?.page,
        navigationStore.currentNavigation?.slug,
    ].join("_")

    return {
        parentId: id,
        key: key,
        patch: `hero`,
        value: null
    } as UpdateParameter
})

const getParameter = (key: string) => {
    return {
        ...parameter.value,
        patch: `hero.${key}`
    }
}

</script>
