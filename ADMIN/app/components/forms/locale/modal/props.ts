import type { LocaleType } from "~/helpers/types/locale-type";

export const LOCALE_MODAL_PROPS = {
    items: {
        type: [Array, Object] as PropType<any>,
        default: []
    },
    item: {
        type: [Object] as PropType<LocaleType>,
        default: null
    },
    path: {
        type: String,
        default: ''
    },
    visibility: {
        type: Boolean,
        default: false
    },
    query: {
        type: String,
        default: ''
    },
    type: {
        type: String as PropType<'object' | 'array'>,
        default: ''
    }
}