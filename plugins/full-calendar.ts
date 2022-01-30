
import { defineNuxtPlugin } from '#app'


// import Calendar from '~/components/global/Calendar.vue'
import Vue from 'vue'

// // Vue..defineComponent().component('full-calendar', Calendar);

export default defineNuxtPlugin((nuxtApp) => {
 //   nuxtApp.vueApp.use(Vcalendar)
  })

// import Mock from 'mockjs'
// import userInfo from './mock/user/user'
// import courses from './mock/course/course'
// import utils from './mock/_utils'
// // var Mock = require('mockjs')
// import { loadEnv } from '../build/loadEnv'
// // const { VITE_USE_MOCK } = viteEnv

// export default function ({ $config: { NODE_ENV, USE_MOCK, VITE_PORT } }) {
//   // console.log(NODE_ENV)
//   // console.log(USE_MOCK)
//   // const viteEnv = loadEnv(NODE_ENV, USE_MOCK)
//   console.log(VITE_PORT)

//   if (USE_MOCK) {
//     Mock.mock('/api/user/getUserInfo', 'get', (options) => {
//       console.log('mock')
//       return Mock.mock(utils.successFn(userInfo))
//     })
//     Mock.mock('/api/course/getCourses', 'get', (options) => {
//       console.log('mock')
//       return Mock.mock(utils.successFn(courses))
//     })
//   }
// }
