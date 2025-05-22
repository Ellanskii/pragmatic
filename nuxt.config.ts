// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'english',
      },
      {
        code: 'ru',
        file: 'ru.json',
        name: 'русский',
      },
    ],
    lazy: true,
    defaultLocale: 'en',
  },
});
