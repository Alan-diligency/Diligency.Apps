import { defineStore } from 'pinia'
import { NO_PARENT } from '~/helpers/constants'
import type { MenuType } from '~/helpers/entities/menu'

export const useMenuStore = defineStore('menu-store', () => {
    const navigationStore = useNavigationStore()
    const _menus = ref([])
    const menus = computed(() => _menus.value)
    const _isLoading = ref(false)
    const isLoadng = computed(() => _isLoading.value)

    const _selectedMenu = ref()
    const selectedMenu = computed(() => _selectedMenu.value)

    const GetMenus = async () => {
        try {
            _isLoading.value = true
            const res: any = await $fetch(
                `/api/menus/names`
            )
            _menus.value = res.data as any
            return res.data
        } catch (err) {
            console.error(err)
        } finally {
            _isLoading.value = false
        }
    }


    const GetMenuByKey = async () => {
        const key = navigationStore.currentNavigation?.key
        try {
            _isLoading.value = true
            const res: any = await $fetch(
                `/api/menus/get-menu?_key=${key}`
            )
            _selectedMenu.value = res.data
            return res.data
        } catch (err) {
            console.error(err)
        } finally {
            _isLoading.value = false
        }
    }

    const deleteMenusByIdAsync = async (parents: MenuType[], deleted: MenuType[]) => {
        if (!parents.length && !deleted.length) return

        try {
            _isLoading.value = true

            for (const menu of deleted) {
                await $fetch('/api/menus/update-by-key', {
                    method: 'POST',
                    body: menu
                })
            }

            if (parents.length) {
                const ids = parents.map(p => p._key)
                await $fetch('/api/menus/delete-by-key', {
                    method: 'POST',
                    body: { ids }
                })
            }

            // Clear local selections after deletion
        } catch (err) {
            console.error('Delete menus error:', err)
        } finally {
            _isLoading.value = false
        }
    }

    const AddMenuAsync = async (menuData: any) => {
        try {
            _isLoading.value = true
            const res = await $fetch('/api/menus/add', {
                method: 'POST',
                body: menuData
            })
            return res
        } finally {
            _isLoading.value = false
        }
    }

    const UpdateMenuByKeyAsync = async (menuData: any) => {
        try {
            _isLoading.value = true
            const res = await $fetch('/api/menus/update-by-key', {
                method: 'POST',
                body: menuData
            })
            return res
        } finally {
            _isLoading.value = false
        }
    }

    const refreshAsync = async (key: any) => {
        await GetMenus()
    }

    const GetParentMenus = computed(() => {
        const parents = _menus.value?.map((menu: any) => menu?._id.replace(/^menu-/, '')) ?? []
        return [NO_PARENT, ...parents,]
    })

    return {
        isLoadng,
        menus,
        selectedMenu,
        GetParentMenus,
        GetMenus,
        GetMenuByKey,
        AddMenuAsync,
        UpdateMenuByKeyAsync,
        deleteMenusByIdAsync,
        refreshAsync
    }
})