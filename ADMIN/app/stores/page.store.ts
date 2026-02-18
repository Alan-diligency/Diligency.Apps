import { defineStore } from 'pinia'

export const usePageStore = defineStore('page-store', () => {
    const navigationStore = useNavigationStore()

    const _selectedPage = ref(null)
    const _isLoading = ref(false)
    const isLoading = computed(() => _isLoading.value)
    const selectedPage = computed(() => _selectedPage.value)

    const GetPagesName = async () => {
        try {
            _isLoading.value = true
            const result = await $fetch('/api/pages/get-names', {
                method: 'GET'
            })

            return result.data
        } catch (err) {
            console.error(err)
        } finally {
            _isLoading.value = false
        }
    }

    const GetPagesByKey = async (key: string) => {
        try {
            _isLoading.value = true
            const res = await $fetch(
                `/api/pages/get-page?_key=${key}`
            )
            _selectedPage.value = res.data as any
            return res.data
        } catch (err) {
            console.error(err)
        } finally {
            _isLoading.value = false
        }
    }

    const refreshAsync = async (key: any = null) => {
        let _key = key ?? navigationStore.currentNavigation?.key
        await GetPagesByKey(_key);
    }

    const UpdateByKeyStringAsync = async (key: string, fieldPath: string, value: any) => {
        try {
            _isLoading.value = true
            const res = await $fetch(
                `/api/pages/update-by-keystring`,
                {
                    method: 'POST',
                    body: { key, fieldPath, value }
                }
            )
            return res

        } catch (err) {
            console.error(err)
        } finally {
            _isLoading.value = false
        }
    }

    return {
        isLoading,
        selectedPage,
        refreshAsync,
        GetPagesName,
        GetPagesByKey,
        UpdateByKeyStringAsync
    }
})