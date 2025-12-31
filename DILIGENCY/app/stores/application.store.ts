import { defineStore } from "pinia"

import { useLocalStorage } from "@vueuse/core"
import { GET_APPLICATION_GROQ } from "~/utils/groq/application.groq"
import { useLoaderStore } from "./loader.store"

export const useApplicationStore = defineStore("app-store", () => {
    const loader = useLoaderStore()
    const maxStep = ref<number>(0)
    const minStep = ref<number>(0)
    const saveData = ref<any>({})
    let currentStep = useLocalStorage("AS_51de314cbc4a4761ba29e2aac7951a82", 0)
    let SavedForms = ref<Array<any>>([])


    const isFinalStep = computed(() => {
        return currentStep.value === maxStep.value
    })

    const GetDataAsync = async () => {
        loader.Show()
        try {
            const result = await SANITY_CLIENT.fetch(GET_APPLICATION_GROQ)
            maxStep.value = result.length - 1

            let res = result.sort((a: any, b: any) => {
                const numberA = isNaN(Number(a.step)) ? 0 : Number(a.step);
                const numberB = isNaN(Number(b.step)) ? 0 : Number(b.step);
                return numberA - numberB;
            });

            return res

        } catch (err) {
            console.error("Error fetching article data:", err)
        } finally {
            loader.Hide()
        }
    }

    const saveStepForm = (data: never) => {
        SavedForms.value = [...SavedForms.value, data]
        console.log(SavedForms.value)
    }

    const resetSaveForm = () => {
        SavedForms.value = []
    }

    const nextStep = () => {
        if (currentStep.value < maxStep.value) {
            currentStep.value += 1
        }
    }

    const getStepForm = (): any => {
        return SavedForms.value[currentStep.value]
    }

    const previousStep = () => {
        if (currentStep.value > minStep.value) {
            currentStep.value -= 1
        }
    }

    return {
        saveData,
        maxStep,
        currentStep,
        isFinalStep,
        SavedForms,
        saveStepForm,
        getStepForm,
        resetSaveForm,
        nextStep,
        previousStep,
        GetDataAsync,
    }
})