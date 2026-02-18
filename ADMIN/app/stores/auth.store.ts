import { jwtDecode } from 'jwt-decode'
import { defineStore } from 'pinia'
import { useMyStorage } from '~/composable/useStorage'
import { JWT_SECRET } from '~/helpers/bcrypt'
import type { AUTH_LOGIN_REQUEST } from '~/helpers/dto/requests/api.auth.request'

interface StoredToken {
    value: string
    expiresAt: number
}

interface JwtPayload {
    exp?: number
    [key: string]: any
}

export const useAuthStore = defineStore('auth-store', () => {
    const { setItem, getItem, removeItem } = useMyStorage()

    const _isLoading = ref(false)
    const _persistentUser = ref<any>()
    const persistenUser = computed(() => _persistentUser.value)
    const isLoading = computed(() => _isLoading.value)

    const setToken = (token: string, ttlMs: number) => {
        const expiresAt = Date.now() + ttlMs
        setItem(JWT_SECRET, { value: token, expiresAt })
    }

    const getToken = (): string | null => {
        const tokenObj = getItem<StoredToken>(JWT_SECRET)
        if (!tokenObj) return null

        const token = tokenObj.value

        if (tokenObj.expiresAt < Date.now()) {
            removeItem(JWT_SECRET)
            return null
        }

        try {
            const decoded = jwtDecode<JwtPayload>(token)
            const now = Date.now() / 1000
            if (decoded.exp && decoded.exp < now) {
                removeItem(JWT_SECRET)
                return null
            }
            return token
        } catch (error) {
            removeItem(JWT_SECRET)
            return null
        }
    }

    const clearToken = () => removeItem(JWT_SECRET)
    const isAuthentified = computed(() => getToken() !== null)

    const loginAsync = async (data: AUTH_LOGIN_REQUEST, redirectTo?: string) => {
        _isLoading.value = true
        try {
            const result = await $fetch('/api/auth/login', {
                method: 'POST',
                body: data
            })

            if (result && result.success && result.token) {
                _persistentUser.value = result.user
                setToken(result.token, 24 * 60 * 60 * 1000)

                return true
            }
            return false

        } catch (err: any) {
            throw err
        } finally {
            _isLoading.value = false
        }
    }


    return {
        isAuthentified,
        persistenUser,
        isLoading,
        setToken,
        clearToken,
        getToken,
        loginAsync
    }
})
