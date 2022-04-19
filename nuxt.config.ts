import { defineNuxtConfig } from 'nuxt3'
import path from 'path'
import svgLoader from "vite-svg-loader"

// import { loadEnv } from './build/utils'

// const viteEnv = loadEnv()
// const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: [
      '@sindresorhus/slugify',
      '@sindresorhus/transliterate',
      'hast-util-select',
      'tslib',
      '@fullcalendar/vue3',
    ],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  ssr: true, //default true
  modules: ['@nuxtjs/dotenv','@intlify/nuxt3'],
  publicRuntimeConfig: {
    USE_MOCK: process.env.USE_MOCK,
    VITE_PORT: process.env.VITE_PORT,
    NODE_ENV: process.env.NODE_ENV,
    isMobile: process.env.IS_MOBILE,
    BASE_URL: process.env.BASE_URL
  },
  vite:{
    plugins: [svgLoader()]
  },
  
  plugins: [
    { src: '~/plugins/mock/mockjs', ssr: true },
    { src: '~/plugins/full-calendar', ssr: false},
    { src: '~/plugins/vue-horizontal',ssr: true},
    { src: '@/plugins/vant-ui', ssr: true },
    // { src: '~/plugins/lodash', ssr: true},
    // ...(process.env.NODE_ENV === 'development'
    //   ? [{ src: '~/plugin/mock/mockjs', ssr: true }]
    //   : []),
  ],
  intlify: {
    localeDir: 'locales', // set the `locales` directory at source directory of your Nuxt application
    vueI18n: {
      locale: 'zh',
      // ...
    }
  },
  css: [
    "~/assets/css/tailwind.css",'vant/lib/index.less', '~/assets/css/global.scss'
  ],
  layoutTransition: {
    name: "fade",
    mode: "out-in"
  },
  pageTransition: {'page-fade': true }
})
