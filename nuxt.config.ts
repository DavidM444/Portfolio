// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-icon', '@nuxtjs/color-mode'],
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
        },
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wdth,wght@0,62.5,200;1,62.5,200&family=Nunito:ital@0;1&family=Open+Sans:wdth,wght@87.5,800&display=swap" 
        }
        
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
           // Importar el JavaScript al final del cuerpo para garantizar la carga correcta
        }
      ]
    },
    pageTransition: true,
 
  }
})