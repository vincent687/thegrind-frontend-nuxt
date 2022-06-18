import {axios} from './axios'

const getMyCalendar = (email: string) => {
    // axios.get('/api/user/getUserInfo').then(({ data }) => {
  
    // })
    return axios.get(`/my-calendar/email/${email}`)
  }
  
  
  export { getMyCalendar }