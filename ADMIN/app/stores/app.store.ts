export const useAppStore = defineStore('app', () => {
    const isAppReady = ref(false)

    const setReady = () => {
        isAppReady.value = true
    }

    return { isAppReady, setReady }
})
