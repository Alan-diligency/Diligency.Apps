export const CHILD_PROPS = {
    excludedKeys: {
        type: Array,
        required: false,
        default: []
    },
    data: {
        type: [Object, null],
        required: false,
        default: null
    },
    tabData: {
        type: [Array<any>],
        required: false,
        default: null
    },
    parentId: {
        type: [String, null],
        required: false,
        default: null
    },
}