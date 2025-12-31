import type { PropType } from "vue";
import type { HubType } from "~/utils/types";
import type { BaseType, BlockType } from "~/utils/types/block.type";

export const BLOCK_PROPS = {
    data: {
        type: Object as PropType<BlockType>,
        required: false,
    },

    type: {
        type: String as PropType<string>,
        required: false,
    },
}

export const OFFER_PROPS = {
    data: {
        type: [Array, Object] as PropType<BaseType>,
        required: false,
    },
}

export const HUB_PROPS = {
    data: {
        type: [Object] as PropType<HubType>,
        required: false
    }
}