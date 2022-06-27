import { defineNuxtConfig } from 'nuxt'
import svgLoader from 'vite-svg-loader'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['vue-i18n'],
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  vite: {
    plugins: [svgLoader()],
  },
  css: [
    '~/assets/css/tailwind.css',
    'vant/lib/index.less',
    '~/assets/css/global.scss',
  ],
  ssr: true,
  plugins: [
    { src: '~/plugins/vue-horizontal', ssr: true },
    { src: '@/plugins/vant-ui', ssr: true },
    { src: '@/plugins/i18n', ssr: true },
  ],
  intlify: {
    localeDir: 'locales', // set the `locales` directory at source directory of your Nuxt application
    vueI18n: {
      locale: 'zh',
      // ...
    },
  },
})
