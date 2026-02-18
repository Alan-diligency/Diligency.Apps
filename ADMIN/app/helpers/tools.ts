export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
export const deepToRaw = <T>(obj: T): T => {
    return JSON.parse(JSON.stringify(toRaw(obj)))
}