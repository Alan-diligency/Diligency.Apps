<template>
    <section class="mt-2 w-full bg-gray-400 rounded-xl p-2">
        <div class="w-full relative transition-all duration-250">
            <div class="py-2">
                BLOCKS
            </div>

            <UCollapsible class="flex flex-col gap-2 w-full">
                <div class=" w-7 absolute top-1 right-4 z-10">
                    <ToolButtonToggle />
                </div>
                <template #content>
                    <div v-for="(item, index) in items" :key="index" class="p-2 bg-gray-50">
                        <FormsString :field="item.key" :value="item.value" path="hero" />
                        <FormsCta :field="item.key" :value="item.value" path="hero" />
                    </div>
                </template>
            </UCollapsible>
        </div>
    </section>
</template>
<script setup lang="ts">
import { useConverter } from '~/composable/useConverter';

const { ConvertObjetcToArray } = useConverter()

const props = defineProps({
    data: {
        type: Array,
        default: []
    },
})
const isHidden = ref(false)
const items = computed(() => ConvertObjetcToArray(props.data ?? {})) 
</script>
