import { v4 as uuidv4 } from 'uuid'
import { deepToRaw } from '~/helpers/tools'
import { LocaleType } from '~/helpers/types/locale-type'

export const useForms = () => {
    const formatLocaleData = (items: Array<{ text: { fr: string; en: string }, _key: string }>): LocaleType[] => {

        return items.map((el: any) =>
            deepToRaw({
                _key: el._key,
                fr: el.text?.fr ?? el.fr,
                en: el.text?.en ?? el.en
            })
        )
    }

    const updateOrCreateFormItems = <T extends { _key?: string }>(
        original: T[],
        item: T,
        editedKey?: string
    ): T[] => {

        const plainOriginal = original.map(i => deepToRaw(i))

        const key = editedKey || uuidv4()

        const updated = deepToRaw({
            ...item,
            _key: key
        })

        return [
            ...plainOriginal.filter(x => x._key !== key),
            updated
        ]
    }

    return {
        updateOrCreateFormItems,
        formatLocaleData
    }
}
