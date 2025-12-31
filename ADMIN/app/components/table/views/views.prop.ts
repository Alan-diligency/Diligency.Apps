
export const TABLE_VIEWS_PROPS = {
    data: {
        type: [Array, Object, String, null],
        required: false,
        default: null
    },
}

export const TABLE_ROW_FIELD_VIEW_PROPS = {
    data: {
        type: [Array, Object, String, null],
        required: false,
        default: null
    },
    keyable: {
        type: String,
        required: false,
        default: ''
    }
}