<script setup lang="ts">
import type { DeleteParam, UpdateParameter } from '~/helpers/dto/requests'
import { useArticleStore } from '~/stores/article.store'

const navigationStore = useNavigationStore()
const articleStore = useArticleStore()

const data = computed(() => articleStore.articles)
const appStore = useAppStore()

watch(
    () => navigationStore.currentNavigation?.key,
    async (currentKey) => {
        if (currentKey && navigationStore.currentNavigation?.type == SECTION_KEY as any) {
            await articleStore.GetArticlesAsync()
        }
    },
    { immediate: true }
)

const isVisibile = computed(() => navigationStore.currentNavigation?.key == SECTION_ARTICLES_KEY)
const addModalVisibility = ref(false)

const parameter = computed(() => {
    const key = navigationStore.currentNavigation?.key
    const id = navigationStore.currentNavigation?.identifier?._id

    return {
        parentId: id,
        key: key,
        patch: '',
        value: null
    } as UpdateParameter
})

const getParameter = (key: string, _parentId: string = '') => {

    return {
        ...parameter.value,
        parentId: _parentId != '' ? _parentId : parameter.value.parentId,
        patch: `${key}`
    }
}

const toDeleteItem = ref<string>('')
const deleteItem = (item: any) => {
    toDeleteItem.value = item?._id
    confirmModaVisibility.value = true
}

// onMounted(async () => {
//     await SANITY_CLIENT.fetch(`
//        *[_type == "article"]
//     `)
// })
const confirmModaVisibility = ref(false)
const toast = useToast()
const onConfimDeletion = async (state: boolean) => {

    if (!state) {
        confirmModaVisibility.value = false
        return
    }

    if (state) {
        const param = {
            _key: toDeleteItem.value
        } as DeleteParam
        const res = await appStore.deleteByKey(param)
        if (res?.success) {
            toast.add({
                title: `Mise à jour avec succès!`,
                color: 'success',
                id: 'modal-success'
            })
            confirmModaVisibility.value = false
            await appStore.RefreshAsync()

            toDeleteItem.value = ''
        }
    }
}

</script>

<template>
    <section class="mt-2 w-full bg-gray-400 rounded-xl p-2" v-if="isVisibile">
        <div class="w-full relative transition-all duration-250">
            <div class="py-2">
                ARTICLES
            </div>
            <div class=" absolute top-1 right-16 z-10">
                <ButtonsGreen text="AJOUTER ARTICLE" @clicked="addModalVisibility = true" />
            </div>
            <UCollapsible :defaultOpen="true" class="flex flex-col gap-2 w-full">
                <div class=" w-7 absolute top-1 right-4 z-10">
                    <ToolButtonToggle />
                </div>
                <template #content>
                    <div class="flex flex-col gap-2 w-full p-2" v-for="(item, index) in (data as any)" :key="index">
                        <div class="p-2 bg-white flex gap-2">
                            <div>
                                <ButtonsRed text="Supprimer" @clicked="deleteItem(item)" />
                                <ToolPopoverConfirmModal :text="`Voulez vous Supprimer cet article?`"
                                    :visibility="confirmModaVisibility" @confirm="onConfimDeletion" />
                            </div>
                            <div class="w-full flex flex-col gap-2">
                                <div class="flex flex-col md:flex-row gap-1 ">
                                    <div class="h-full aspect-square class">
                                        <img :src="item.thumbnail" alt="" class="object-cover size-full  rounded-md">
                                    </div>
                                    <WidgetsString :displayText="'author'" :item="item.author"
                                        :parameter="getParameter('author')" />
                                    <WidgetsString :displayText="'image'" :item="item.image"
                                        :parameter="getParameter('image')" />

                                    <WidgetsString :displayText="'thumbnail'" :item="item.thumbnail"
                                        :parameter="getParameter('thumbnail')" />
                                </div>
                                <div class="flex flex-col md:flex-row gap-1 ">
                                    <WidgetsStringList :displayText="'topTags'" :items="item.topTags"
                                        :parameter="getParameter('topTags', item?._id)" />
                                    <WidgetsStringList :displayText="'bottomTags'" :items="item.bottomTags"
                                        :parameter="getParameter('bottomTags', item?._id)" />
                                </div>
                                <WidgetsLocaleItem displayText="title" :items="item?.title" :item="item?.title"
                                    :actions="['edit']" :parameter="getParameter('title')" />
                                <WidgetsLocaleItem displayText="content" :items="item.content" :item="item.content"
                                    :actions="['edit']" :parameter="getParameter('content')" />
                            </div>
                        </div>
                    </div>
                </template>
            </UCollapsible>
            <LoadingInLoading />
        </div>
    </section>
    <TemplatesTableSectionArticlesModalAdd :visibility="addModalVisibility" @close="addModalVisibility = false" />
</template>