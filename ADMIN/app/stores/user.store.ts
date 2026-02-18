import { defineStore } from 'pinia'
import { USERS_MOCKS } from '~/components/templates/auth/mocks/user'
import type { ADD_USER_REQUEST } from '~/helpers/dto/requests/user.add.request'

export const useUserStore = defineStore('user-store', () => {

    const _isLoading = ref(false)
    const isLoading = computed(() => _isLoading.value)

    const GetUsersASync = async () => {
        _isLoading.value = true
        try {
            const result = await $fetch('/api/user/all', {
                method: 'GET'
            })
            return result.data
        } catch (err: any) {
            throw err
        } finally {
            _isLoading.value = false
        }

    }

    const AddUserAsync = async (user: ADD_USER_REQUEST) => {
        _isLoading.value = true
        try {
            const result = await $fetch('/api/user/add', {
                method: 'POST',
                body: user
            })

            if (result) {
                console.log(result)
            }
        } catch (err: any) {
            throw err
        } finally {
            _isLoading.value = false
        }
    }

    const deleteAllUserAsync = async () => {
        _isLoading.value = true
        try {
            await $fetch('/api/user/delete-all', {
                method: 'GET',
            })
        } catch (err: any) {
            throw err
        } finally {
            _isLoading.value = false
        }
    }

    const addFixtureAsync = async () => {
        USERS_MOCKS.forEach(async (user: ADD_USER_REQUEST) => {
            await AddUserAsync(user);
        })
    }

    return {
        isLoading,
        deleteAllUserAsync,
        GetUsersASync,
        AddUserAsync,
        addFixtureAsync
    }
})