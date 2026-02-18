import type { UpdateParameter } from "~/helpers/dto/requests";

export const PROPS = {
    items: {
        type: Array as PropType<string[]>,
        default: null
    },
    item: {
        type: String as PropType<string>,
        default: null
    },
    icon: {
        type: String as PropType<string>,
        default: null
    },
    displayText: {
        type: String,
        default: ''
    },
    parameter: {
        type: [Object] as PropType<UpdateParameter>,
        default: null
    }
}