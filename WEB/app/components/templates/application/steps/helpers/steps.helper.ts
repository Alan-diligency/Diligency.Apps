import type { ZodObject } from 'zod';
import { useFormFormatValidation } from '~/composables/useFormFormatValidation';
import { useApplicationStore } from '~/stores/application.store';

export const HandleApplicationNextStepAsync = async (
    form: Record<string, any>,
    errors: Record<string, string>,
    schema: ZodObject<any>
): Promise<{ success: boolean; errors: Record<string, string> }> => {
    const applicationStore = useApplicationStore()
    const { validateFormFormat } = useFormFormatValidation()
    const { HumanizeForm } = useHumanizeForm()
    clearReactiveErrors(errors)

    if (!form || Object.keys(form).length === 0) {
        AppendStorage({}, Number(applicationStore.currentStep))
        applicationStore.nextStep()
        return { success: true, errors: {} }
    }

    const result = schema.safeParse(form)
    if (!result.success) {
        result.error.issues.forEach(issue => {
            const key = issue.path[0] as string
            errors[key] = issue.message
        })
        return { success: false, errors }
    }

    const formatOk = validateFormFormat(form, errors)
    if (!formatOk) return { success: false, errors }

    AppendStorage(HumanizeForm(form), Number(applicationStore.currentStep), APP_HUMANIZED_KEY)
    AppendStorage(form, Number(applicationStore.currentStep), APP_STORAGE_KEY)

    if (applicationStore.isFinalStep) {
        const res = await applicationStore.SubmitApplicationAsync()
        if (res) {
            return { success: true, errors }
        }
    }
    applicationStore.nextStep()
    return { success: true, errors: {} }
}


export const restoreFormStepFromLocalStorage = (
    stepKey: string | number
): Record<string, any> | null => {
    if (!import.meta.client) return null

    const saved = localStorage.getItem(APP_STORAGE_KEY)
    if (!saved) return null

    const savedData: Record<string, any> = JSON.parse(saved)
    return savedData[stepKey] ?? null
}

export const clearReactiveErrors = (errors: Record<string, string>) => {
    Object.keys(errors).forEach(k => delete errors[k])
}

const AppendStorage = (data: Record<string, any>, key: number, _storageKey: string = APP_STORAGE_KEY) => {
    if (!import.meta.client) return
    const saved = localStorage.getItem(_storageKey)
    const savedData: Array<any> = saved ? JSON.parse(saved) : []
    savedData[key] = data
    localStorage.setItem(_storageKey, JSON.stringify(savedData))
}