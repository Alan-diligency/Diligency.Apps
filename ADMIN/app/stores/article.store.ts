import { defineStore } from 'pinia'

export const useArticleStore = defineStore('article-store', () => {

    const _articles = ref([])
    const articles = computed(() => _articles.value)
    const _isLoading = ref(false)
    const isLoadng = computed(() => _isLoading.value)

    const GetArticlesAsync = async () => {
        try {
            _isLoading.value = true
            const res: any = await $fetch(
                `/api/articles/all`
            )
            _articles.value = res.data as any
            return res.data
        } catch (err) {
            console.error(err)
        } finally {
            _isLoading.value = false
        }
    }


    const GetArticleByKeyAsync = async () => {
        // const key = navigationStore.currentNavigation?.key
        // try {
        //     _isLoading.value = true
        //     const res: any = await $fetch(
        //         `/api/menus/get-menu?_key=${key}`
        //     )
        //     _selectedMenu.value = res.data
        //     return res.data
        // } catch (err) {
        //     console.error(err)
        // } finally {
        //     _isLoading.value = false
        // }
    }

    const refreshAsync = async (key: any) => {
        await GetArticlesAsync()
    }

    return {
        isLoadng,
        articles,
        GetArticlesAsync,
        GetArticleByKeyAsync,
        refreshAsync
    }
})