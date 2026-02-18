// composables/useFieldPaths.ts
export type AnyObject = Record<string, any>

/**
 * Recursively get all leaf field paths from an object.
 * @param obj The object to traverse
 * @param parentPath Current path in recursion (do not pass manually)
 * @param endKey Optional: filter paths to only include those ending with this key
 */
export function useFieldPaths() {
    const getLeafFieldPaths = (
        obj: AnyObject,
        parentPath = '',
        endKey?: string
    ): string[] => {
        const paths: string[] = []

        for (const key in obj) {
            if (!obj.hasOwnProperty(key)) continue

            const value = obj[key]
            const path = parentPath ? `${parentPath}.${key}` : key

            if (Array.isArray(value)) {
                value.forEach((item, index) => {
                    if (item !== null && typeof item === 'object') {
                        paths.push(...getLeafFieldPaths(item, `${path}.${index}`, endKey))
                    } else {
                        const leafPath = `${path}.${index}`
                        if (!endKey || leafPath.endsWith(endKey)) {
                            paths.push(leafPath)
                        }
                    }
                })
            } else if (value !== null && typeof value === 'object') {
                paths.push(...getLeafFieldPaths(value, path, endKey))
            } else {
                if (!endKey || path.endsWith(endKey)) {
                    paths.push(path)
                }
            }
        }

        return paths
    }

    return { getLeafFieldPaths }
}
