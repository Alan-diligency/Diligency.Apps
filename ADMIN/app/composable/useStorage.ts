export const useMyStorage = () => {
    const setItem = (key: string, data: unknown): boolean => {
        if (!key) return false
        if (!import.meta.client) return false

        try {
            const value = JSON.stringify(data)
            localStorage.setItem(key, value)
            return true
        } catch (error) {
            console.error('setItem error:', error)
            return false
        }
    }

    const getItem = <T = unknown>(key: string): T | null => {
        if (!key) return null
        if (!import.meta.client) return null

        try {
            const value = localStorage.getItem(key)
            if (!value) return null
            return JSON.parse(value) as T
        } catch (error) {
            console.error('getItem error:', error)
            return null
        }
    }

    const removeItem = (key: string): boolean => {
        if (!key) return false
        if (!import.meta.client) return false

        localStorage.removeItem(key)
        return true
    }

    return {
        setItem,
        getItem,
        removeItem
    }
}
