<template>
    <div :class="['w-full px-4 lg:px-10 2xl:px-35 bg-black', props.customClass]">
        <slot class="mt-16" />
    </div>
</template>
<script lang="ts" setup>

const props = defineProps({
    customClass: {
        required: false,
        type: String,
        default: 'h-screen'
    }
})
</script>