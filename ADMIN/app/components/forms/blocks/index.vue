<template>
    <UAccordion :items="items">
        <template #body="{ item }">
            <div class="flex flex-col gap-2 bg-white p-4">
                <div class="p-2 bg-gray-300 rounded-md" v-if="IsArrayOfString((item?.content as any)?.items)">
                    <div class="font-bold">Image</div>
                    <ListOfString :items="getItems(item)" />
                </div>
                <div class="p-2 bg-gray-300 rounded-md">
                    <div class="font-bold">Title</div>
                    <FormsCommonLocaleList :value="getTitle(item)" />
                </div>
                <div class="p-2 bg-gray-300 rounded-md">
                    <div class="font-bold">Subtitle</div>
                    <FormsCommonLocaleList :value="getSubtitle(item)" />
                </div>
                <div class="p-2 bg-gray-300 rounded-md" v-if="getCta(item)">
                    <div class="font-bold">CTA</div>
                    <FormsHeroCta :value="getCta(item)" />
                </div>
            </div>
        </template>
    </UAccordion>
</template>
<script lang="ts" setup>
import type { AccordionItem } from '@nuxt/ui';
import { useTypeCheck } from '~/composable/useTypeCheck';
import { TABLE_PROPS } from '../table-props';
const props = defineProps(TABLE_PROPS)
const items = ref<AccordionItem[]>([])
const { IsArrayOfString } = useTypeCheck()
onMounted(() => {
    transformdata()
})

const getItems = (item: any) => {
    return (item?.content as any)?.items
}

const getTitle = (item: any) => {
    return (item?.content as any)?.title
}

const getSubtitle = (item: any) => {
    return (item?.content as any)?.subtitle
}

const getCta = (item: any) => {
    return (item?.content as any)?.cta
}

const transformdata = () => {
    const data = props.value
    let i = 0
    data?.forEach((element: any) => {
        items.value.push(
            {
                label: "BLOCK " + i,
                content: element
            }
        )
        i++
    });
}
</script>
