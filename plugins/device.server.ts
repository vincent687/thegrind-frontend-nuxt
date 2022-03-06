import MobileDetect from 'mobile-detect'
import { useIsMobile } from '~~/composables'
import { store, key } from  '@/store/index'
import { defineNuxtPlugin } from '#app'


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store, key)
})

