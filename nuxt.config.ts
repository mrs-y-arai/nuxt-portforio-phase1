// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-microcms-module"],
  microCMS: {
    serviceDomain: "yuki-arai-portforio",
    apiKey: "XhvnQPgHoxFJy6bVBm0zBuKCpSKsBleqyiUu",
  },
  srcDir: "src/",
  css: ["@/assets/css/tailwind.css"],
  components: [
    {
      path: "~/features/",
      pathPrefix: false,
    },
    {
      path: "~/components/",
      pathPrefix: false,
    },
  ],
});
