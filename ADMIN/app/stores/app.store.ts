import { defineStore } from 'pinia'
import type { AddParameter, DeleteParam, UpdateParameter } from '~/helpers/dto/requests'
export type SanityKeyItem = {
    _type: string
    _key: string
    _id: string
}

export type UpdateStringParameter = {
    key: string
    fieldPath: string
    value: any
    identifier?: any
    query: string,
    findParentQuery?: string
}




export const useAppStore = defineStore('app-store', () => {
    const pageStore = usePageStore()
    const menuStore = useMenuStore()

    const _isLoading = ref(false)
    const isLoading = computed(() => _isLoading.value)

    const ShowLoading = () => {
        _isLoading.value = true
    }

    const HideLoading = () => {
        _isLoading.value = false
    }

    const RefreshAsync = async (_key: any = undefined) => {
        ShowLoading()
        await pageStore.refreshAsync(_key)
        await menuStore.refreshAsync(_key)
        HideLoading()
    }

    const fetchKeys = async () => {
        ShowLoading()
        const res = await $fetch('/api/ids/all') as any
        return res['data'] as SanityKeyItem[]
    }
    const UpdateData = async (param: UpdateStringParameter) => {
        try {
            ShowLoading()
            return await $fetch('/api/app/update', {
                method: 'POST',
                body: param
            })

        } catch (err) {
            console.error(err)
        } finally {
            HideLoading()
        }
    }
    //V 2.0
    const Update = async (param: UpdateParameter) => {
        try {
            ShowLoading()
            return await $fetch('/api/app/update', {
                method: 'POST',
                body: param
            })

        } catch (err) {
            console.error(err)
        } finally {
            HideLoading()
        }
    }

    const Add = async (param: AddParameter) => {
        _isLoading.value = true
        try {
            ShowLoading()
            return await $fetch('/api/app/add', {
                method: 'POST',
                body: param
            })

        } catch (err) {
            console.error(err)
        } finally {
            HideLoading()
        }
    }

    const deleteByKey = async (param: DeleteParam) => {
        try {
            ShowLoading()
            return await $fetch('/api/app/deleteById', {
                method: 'POST',
                body: param
            })

        } catch (err) {
            console.error(err)
        } finally {
            HideLoading()
        }
    }

    return {
        isLoading,
        ShowLoading,
        HideLoading,
        fetchKeys,
        UpdateData,
        Update,
        Add,
        deleteByKey,
        RefreshAsync
    }
})