// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      title: "Vegan Dietitian",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      style:[
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' },
      ]
    }
  },

  css: [
    // "bootstrap/scss/bootstrap.scss",
    "swiper/css/bundle",
    "@/assets/css/font-awesome-pro.css",
    "@/assets/css/nice-select.css",
    // "@/assets/scss/main.scss",
  ],

  modules: ["nuxt-quasar-ui"],

  routeRules:{
    '/panel/**': { ssr: false },
  },
  quasar: {
    plugins: ['Notify'],
    extras: [
      'material-icons'
    ]
  },
})