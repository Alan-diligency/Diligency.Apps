import { defineNuxtPlugin } from '#app'
import { gsap } from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import ScrollSmoother from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'

export default defineNuxtPlugin(() => {
    gsap.registerPlugin(
        ScrambleTextPlugin,
        ScrollTrigger,
        ScrollSmoother,
        SplitText)
})