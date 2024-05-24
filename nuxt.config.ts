// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    spoonacular: {
      apiKey: process.env.API_KEY
    }
  },
  image: {
    providers: {
      spoonacular: {
        provider: '~/providers/spoonacular.ts',
      }
    }
  },
  modules: ["@nuxt/ui", "@nuxt/image"]
})
