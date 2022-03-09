
import { defineNuxtPlugin } from '#app'

import Vant from 'vant'
// import Calendar from '~/components/global/Calendar.vue'
import Vue from 'vue'

// // Vue..defineComponent().component('full-calendar', Calendar);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vant)
  })