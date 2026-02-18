import type { UpdateParameter } from "../dto/requests";

export const TABLE_PROPERTY = {
    originalItems: {
        type: [Array, Object] as PropType<any>,
        default: []
    },
    items: {
        type: [Array] as PropType<any[]>,
        default: null
    },
    item: {
        type: [Object] as PropType<any>,
        default: null
    },
    displayText: {
        type: String,
        default: ''
    },
    type: {
        type: [String] as PropType<string>,
        default: ''
    },
    actions: {
        type: [Array] as PropType<string[]>,
        default: []
    },
    parameter: {
        type: [Object] as PropType<UpdateParameter>,
        default: null
    }
}
