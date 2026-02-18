import type { UpdateParameter } from "~/helpers/dto/requests";

export const PROPS = {
    items: {
        type: [Array] as PropType<any[]>,
        default: []
    },
    item: {
        type: [Object] as PropType<any>,
        default: null
    },
    visibility: {
        type: Boolean,
        default: false
    },
    datatype: {
        type: String as PropType<'object' | 'array'>,
        default: ''
    },
    parameter: {
        type: [Object] as PropType<UpdateParameter>,
        default: null
    }
}