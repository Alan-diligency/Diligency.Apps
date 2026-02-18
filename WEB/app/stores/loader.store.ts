export const useLoaderStore = defineStore('loader-store', () => {
    const loading = ref(true)

    const Hide = async () => {
        loading.value = false;
    }

    const Show = async () => {
        loading.value = true;
    }

    return {
        loading,
        Hide,
        Show
    }
});