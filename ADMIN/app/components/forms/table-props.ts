export const TABLE_PROPS = {
    value: {
        type: [String, Number, Object, Array] as PropType<any | any[]>,
        default: null
    },
    field: {
        type: String,
        default: ''
    },
    path: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    query: {
        type: String,
        default: ''
    }
}