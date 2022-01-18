import Mock from 'mockjs'
import userInfo from './user/user'
import utils from './_utils'
// var Mock = require('mockjs')
import { loadEnv } from '../../build/loadEnv'
// const { VITE_USE_MOCK } = viteEnv

export default function ({ $config: { NODE_ENV, USE_MOCK, VITE_PORT } }) {
  // console.log(NODE_ENV)
  // console.log(USE_MOCK)
  // const viteEnv = loadEnv(NODE_ENV, USE_MOCK)
  console.log(VITE_PORT)

  if (USE_MOCK) {
    Mock.mock('/api/user/getUserInfo', 'get', (options) => {
      console.log('mock')
      return Mock.mock(utils.successFn(userInfo))
    })
  }
}
