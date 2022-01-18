import axios from 'axios'

const getUser = (params: any) => {
  // axios.get('/api/user/getUserInfo').then(({ data }) => {

  // })
  debugger
  return axios.get('/api/user/getUserInfo')
}

export { getUser }
