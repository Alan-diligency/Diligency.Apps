import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/input.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    "@nuxt/icon",
    "@pinia/nuxt",
  ],

  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
