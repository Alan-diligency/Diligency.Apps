<template>
    <button v-if="!sanityStore.isPosting" @click="handleClick" type="button" @mouseenter="hover = true"
        @mouseleave="hover = false"
        class="text-tertiary-500 relative group text-xl transition-all duration-500 h-14 bg-transparent md:w-auto  flex items-center justify-center md:justify-start gap-3 font-semi-bold hover:text-secondary-700">
        <Icon v-if="iconPosition == 'left'" name="lucide:arrow-left"
            :class="['transition-all duration-300 size-7 fill-accent', hover ? 'mr-2' : 'mr-0']" />
        <span
            class="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-secondary-700 after:transition-all after:duration-500 group-hover:after:w-full after:rounded-full">
            {{ props?.text }}
        </span>
        <Icon v-if="iconPosition == 'right' && !sanityStore.isPosting" name="lucide:arrow-right"
            :class="['transition-all duration-300 size-7 fill-accent', hover ? 'ml-2' : 'ml-0']" />
    </button>
</template>

<script lang="ts" setup>
import { useSanityStore } from '~/stores/sanity.store';

const sanityStore = useSanityStore()
const hover = ref(false)

const props = defineProps({
    text: {
        required: false,
        type: String,
        default: null
    },
    iconPosition: {
        required: false,
        type: String,
        default: 'right'
    },
})

const emit = defineEmits<{
    (e: 'clicked'): void;
}>();

const handleClick = () => {
    emit('clicked');
}

</script>
