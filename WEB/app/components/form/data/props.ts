export const BASE_PROPS = {
    type: {
        type: String,
        required: false
    },
    placeholder: {
        type: String,
        required: false
    },
    error: {
        type: String,
        required: false
    },

    name: {
        type: String,
        required: false
    },

    errorColor: {
        type: String,
        required: false
    },
    radio: {
        type: Array,
        required: false,
    },
    labelClass: {
        type: String,
        required: false,
        default: 'text-primary'
    },
    label: {
        type: String,
        required: false
    },
    radioLayout: {
        type: String,
        required: false,
        default: 'flex-col'
    },
    custom: {
        type: String,
        default: ''
    }
}