import { axios } from './axios'

const getMyCalendar = (email: string) => {
  // axios.get('/api/user/getUserInfo').then(({ data }) => {

  // })
  return axios.get(`/my-calendarNonOdoo/email/${email}`)
}

export { getMyCalendar }
