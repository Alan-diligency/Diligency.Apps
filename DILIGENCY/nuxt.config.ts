import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  routeRules: {
    '/': { redirect: '/home' }
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxtjs/i18n",
  ],


  css: [
    "~/assets/app.css",
    "~/assets/default.css",
    "~/assets/dynamic.css"
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  i18n: {
    locales: [
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'fr',
    langDir: 'locales/',
    strategy: 'no_prefix'
  },
  app: {
    head: {
      title: 'Diligency',
      meta:
        [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" },
          { "http-equiv": "X-UA-Compatible", content: "ie=edge" },
        ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon/android-chrome-192x192.png" }
      ]
    },
  },
  runtimeConfig: {
    public: {
      SANITY_CLIENT_TOKEN: process.env.SANITY_CLIENT_TOKEN,
      SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    },
  },
})