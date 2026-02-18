import { useLocalStorage } from "@vueuse/core"
import { GET_APPLICATION_GROQ } from "~/utils/groq/application.groq"
import { useLoaderStore } from "./loader.store"
import { useSanityStore } from "./sanity.store"

export const useApplicationStore = defineStore("app-store", () => {
    const loader = useLoaderStore()
    const currentStep = useLocalStorage("AS_51de314cbc4a4761ba29e2aac7951a82", 0)

    const _maxStep = ref<number>(0)
    const _minStep = ref<number>(0)
    const _data = ref<Array<any>>([])

    const isFinalStep = computed(() => currentStep.value === _maxStep.value)
    const maxStep = computed(() => _maxStep.value)
    const minStep = computed(() => _minStep.value)
    const isSubmittingApplication = ref<boolean>(false)



    const nextStep = () => {
        if (currentStep.value < _maxStep.value) {
            currentStep.value += 1
        }
    }

    const previousStep = () => {
        if (currentStep.value > _minStep.value) {
            currentStep.value -= 1
        }
    }

    const SubmitApplicationAsync = async () => {
        isSubmittingApplication.value = true
        try {
            await new Promise(resolve => setTimeout(resolve, 1000))

            const localData = JSON.parse(
                localStorage.getItem(APP_HUMANIZED_KEY) || "[]"
            )

            const data = {
                ...localData.filter((obj: null) => obj !== null).reduce((acc: any, obj: any) => ({ ...acc, ...obj }), {})
            };

            return await useSanityStore()
                .PostApplicationAsync(data, "applicationData")

        } finally {
            isSubmittingApplication.value = false
        }
    }

    const GetDataAsync = async () => {
        loader.Show()
        try {
            const result = await SANITY_CLIENT.fetch(GET_APPLICATION_GROQ)
            _maxStep.value = result.length - 1
            _minStep.value = 0
            _data.value = result
            if (import.meta.client) {
                localStorage.setItem(APP_STORAGE_KEY, "[]")
                localStorage.setItem(APP_HUMANIZED_KEY, "[]")
            }
            return result.sort((a: any, b: any) => {
                const A = Number(a.step) || 0
                const B = Number(b.step) || 0
                return A - B
            })
        } finally {
            loader.Hide()
        }
    }

    return {
        _data,
        minStep,
        maxStep,
        currentStep,
        isFinalStep,
        nextStep,
        previousStep,
        GetDataAsync,
        SubmitApplicationAsync
    }
})