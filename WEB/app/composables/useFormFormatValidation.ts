export const useFormFormatValidation = () => {
    const validateFormFormat = (
        form: Record<string, any>,
        errors: Record<string, string>
    ): boolean => {
        let isValid = true

        // if (form.phone && !/^\+?\d{8,15}$/.test(form.phone)) {
        //     errors.phone = 'Invalid phone format'
        //     isValid = false
        // }

        // if (form.username && form.username.length < 3) {
        //     errors.username = 'Username too short'
        //     isValid = false
        // }

        return isValid
    }

    return { validateFormFormat }
}
