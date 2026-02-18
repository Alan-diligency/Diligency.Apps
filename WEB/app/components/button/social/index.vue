<template>
    <a @click="OnClick" v-if="StringOrBooleaToBoolean(props.data.isVisible)"
        class="group text-primary hover:text-tertiary transition-fast transition-all duration-300 relative">
        <Icon :name="props.data.icon" class="size-6" />
        <div class="transition-all duration-350 absolute hidden group-hover:block bg-secondary-500 text-white text-xs rounded-sm px-2 py-1 top-0 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap"
            v-if="!isLink(props.data.link)">
            En cours de création
        </div>
    </a>
</template>
<script lang="ts" setup>
import { isLink } from '~/utils/http';
import type { SocialType } from './interface';

const props = defineProps({
    data: {
        required: true,
        type: Object as () => SocialType,
    },
})

const StringOrBooleaToBoolean = (value: string | boolean): boolean => {
    if (typeof value === 'boolean') {
        return value;
    }
    return value.toLowerCase() === 'true';
}

const OnClick = () => {
    window.open(`${props.data.link}`, '_blank', 'noopener,noreferrer')
}
</script>