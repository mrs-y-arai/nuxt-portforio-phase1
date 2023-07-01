// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap",
          crossorigin: "",
        },
      ],
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
