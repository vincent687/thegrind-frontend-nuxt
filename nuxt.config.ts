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
      postcssOptions: require('./postcss.config.js'),
    },
  },
  css: ['~/assets/css/tailwind.css'],
  ssr: true, //default true
  modules: ['@nuxtjs/dotenv','@intlify/nuxt3'],
  publicRuntimeConfig: {
    USE_MOCK: process.env.USE_MOCK,
    VITE_PORT: process.env.VITE_PORT,
    NODE_ENV: process.env.NODE_ENV,
  },
  vite:{
    plugins: [svgLoader()]
  },
  plugins: [
    { src: '~/plugins/mock/mockjs', ssr: true },
    { src: '~/plugins/full-calendar', ssr: false},
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
  }
})
