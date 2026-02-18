export const useTransformLocalStorageData = () => {
    const transformLocalStorageData = (
        localData: Record<string, any>,
        keyMap: Record<string, string>
    ) => {
        const result: Record<string, any> = {}

        Object.values(localData).forEach((stepForm: any) => {
            Object.entries(stepForm).forEach(([rawKey, rawValue]) => {
                const mappedKey = keyMap[rawKey]

                if (!mappedKey) return

                result[mappedKey] = rawValue
            })
        })

        return result
    }

    return { transformLocalStorageData }
}
