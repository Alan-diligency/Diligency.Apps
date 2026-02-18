import { defineStore } from 'pinia'

export const useFooterStore = defineStore('footer-store', () => {
    const navigationStore = useNavigationStore()

    const _footers = ref()

    const _isLoading = ref(false)
    const isLoading = computed(() => _isLoading.value)
    const footers = computed(() => _footers.value)

    const GetFooters = async () => {
        try {
            _isLoading.value = true
            const res = await $fetch(
                `/api/footer/all`
            )
            _footers.value = res.data?.[0] as any
            return res.data?.[0]
        } catch (err) {
            console.error(err)
        } finally {
            _isLoading.value = false
        }
    }

    const refreshAsync = async () => {
        await GetFooters()
    }

    return {
        isLoading,
        footers,
        GetFooters,
        refreshAsync
    }
})