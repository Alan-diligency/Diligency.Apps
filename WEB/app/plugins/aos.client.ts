import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
    AOS.init({
        once: false,      // animate only once
        duration: 600,   // animation duration
        easing: 'ease-in-out',
    })
})
