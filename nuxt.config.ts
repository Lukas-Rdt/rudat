// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "de",
      },
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@nuxt/content",
    "@stefanobartoletti/nuxt-social-share",
    "@tresjs/nuxt",
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: [
      { code: "de", iso: "de-DE", file: "de.json" },
      { code: "en", iso: "en-US", file: "en.json" },
    ],
    defaultLocale: "de",
    strategy: "prefix",
    lazy: true,
    langDir: "lang/",
  },
});
