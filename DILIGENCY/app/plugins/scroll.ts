// // plugins/scrollBehavior.ts
// import { defineNuxtPlugin } from '#app'

// import { useRouter } from 'vue-router'

// export default defineNuxtPlugin(() => {
//     // Access the router instance with correct typing
//     const router = useRouter()

//     // Set custom scroll behavior
//     router.options.scrollBehavior = (to, from, savedPosition) => {
//         // Always scroll to the top when navigating to a new page
//         if (to.path !== from.path) {
//             return { left: 0, top: 0 }
//         }
//         // Keep the scroll position for the same page
//         return savedPosition || { left: 0, top: 0 }
//     }
// })



// plugins/scrollBehavior.ts
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
    const router = useRouter()// Access the Nuxt router instance

    // Set custom scroll behavior
    router.options.scrollBehavior = (to, from, savedPosition) => {
        nextTick(() => {
            window.scrollTo(0, 0);
        });
    }
})
