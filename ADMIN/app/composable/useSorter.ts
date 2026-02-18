export const useSorter = () => {

    const OrderHeroItems = (list: Array<any>) => {
        const ORDER = ['title', 'subtitle', 'background', 'cta']

        return list.sort((a, b) => {
            const aIndex = ORDER.indexOf(a.key)
            const bIndex = ORDER.indexOf(b.key)

            return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex)
        })
    }

    return {
        OrderHeroItems
    }
}
