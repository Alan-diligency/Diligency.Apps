// composables/useBuildKeyMap.ts
export const useBuildKeyMap = () => {
    const buildKeyMap = (data: any[]) => {
        const map: Record<string, string> = {}

        data.forEach(step => {
            step.form?.forEach((field: any) => {
                // normal fields
                if (field.fieldKey) {
                    map[field._key] = field.fieldKey
                }

                // radio / check fields
                if (field.radio) {
                    field.radio.forEach((opt: any) => {
                        if (opt.fieldKey) {
                            map[opt._key] = opt.fieldKey
                        }
                    })
                }
            })
        })

        return map
    }

    return { buildKeyMap }
}
