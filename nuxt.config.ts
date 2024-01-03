// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    {
      src: "~/plugins/highcharts.js",
      mode: "client",
    },
  ],
});
