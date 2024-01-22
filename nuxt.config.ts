// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxtter',
      titleTemplate: '%s - Nuxtter',
    },
  },
  ui: {
    icons: ['fe'],
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts'],
  devtools: { enabled: true },
});
