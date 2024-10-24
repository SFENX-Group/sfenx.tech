// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/icon', '@pinia/nuxt', '@nuxt/image'],
  runtimeConfig: {
    public: {
      GIT_AUTH_TOKEN: process.env.GIT_AUTH_TOKEN,
    },
  },
})
