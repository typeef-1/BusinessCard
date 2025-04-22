// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "My Landing",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/image.png",
        },
      ],
    },
  },

  css:['~/assets/css/fonts.css'],
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss:{
    config:{
      plugins:[
        tailwindTypography
      ]
    }
  }
})