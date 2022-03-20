import axios from 'axios'


//https://thegrind-backend-5x42fcw6uq-df.a.run.app/tutors
const getCompanys = (params: any) => {
  // axios.get('/api/user/getUserInfo').then(({ data }) => {

  // })
  debugger
  return axios.get('/api/companys')
}

const getCompany = (params: any) => {

  debugger
  return axios.get('/api/companys/1')
}

export { getCompanys, getCompany }
