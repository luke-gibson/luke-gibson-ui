// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    preset: 'cloudflare-pages'
  },

  modules: [
    "@nuxtjs/tailwindcss", 
    "@nuxt/image",
    "@nuxtjs/supabase"
  ],

  supabase: {
    redirect: false,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Luke Gibson | Web Designer and Developer Waterlooville, Hampshire',
      link: [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com'},
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap', media:"print", onload:"this.onload=null;this.removeAttribute('media');", fetchpriority:"high"},
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        { name: 'description', content: 'I create pixel-perfect, responsive, dynamic, seo friendly, engaging and accessible digital products.' }
      ],
      bodyAttrs: {
        class: 'bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900',
      },
    }
  },

  compatibilityDate: '2024-07-13'
})