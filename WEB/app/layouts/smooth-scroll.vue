<template>
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useNuxtApp } from '#app';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { onBeforeUnmount, onMounted } from 'vue';

const props = defineProps<{
    vars?: Record<string, any>
}>()

const nuxtApp = useNuxtApp()

let smoother: ScrollSmoother | null = null

const createSmoother = (vars: Record<string, any> = {}) => {
    if (smoother) {
        smoother.kill()
    }
    smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1,
        effects: true,
        ...vars,
    })
}

const refreshScroll = () => {
    smoother?.refresh()
    ScrollTrigger.refresh()
}

onMounted(() => {
    if (process.client) {
        createSmoother(props.vars)
        nuxtApp.hook('app:mounted', () => {
            nuxtApp.$bus?.on('refresh-scroll', refreshScroll)
        })
    }
})

onBeforeUnmount(() => {
    smoother?.kill()
    smoother = null
})
</script>

<style>
#smooth-wrapper {
    overflow: hidden;
    height: 100vh;
}

#smooth-content {
    will-change: transform;
}
</style>