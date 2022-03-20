import { parseClassNames } from '@fullcalendar/core'
import { axios } from './axios'



//const config = useRuntimeConfig()

const getUser = (params: any) => {
  // axios.get('/api/user/getUserInfo').then(({ data }) => {

  // })
  debugger
  return axios.get('/api/user/getUserInfo')
}

const register = async (params: any) => {
  debugger;
  //console.log(config.BASE_URL)
  const res = await axios.post(`/authentication/register`,  {
    ...params
  });

  return res

}


const login = async (params: any) => {
  debugger;
  //console.log(config.BASE_URL)
  const res = await axios.post(`/authentication/login`,  {
    ...params
  });
 
  return res

}

export { getUser, register ,login }
