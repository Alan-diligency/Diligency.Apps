import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading-store', () => {

    const _isLoading = ref(false)
    const isLoading = computed(() => _isLoading.value)

    const SetLoading = async (status: boolean) => {
        _isLoading.value = status
    }


    return {
        isLoading,
        SetLoading,
    }
})