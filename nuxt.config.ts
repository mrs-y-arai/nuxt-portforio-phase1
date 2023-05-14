// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
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
