import { axios } from './axios'

//https://thegrind-backend-5x42fcw6uq-df.a.run.app/tutors
const getCompanys = (params: any) => {
  // axios.get('/api/user/getUserInfo').then(({ data }) => {

  // })
  //return axios.get('/api/companys')

  return axios.get('/companys', {
    params: {
      page: params.skip,
      pageSize: params.pageSize,
    },
  })
}

const getCompany = (params: any) => {
  //return axios.get('/api/companys/1')
  return axios.get(`/companys/${params.id}`)
}

export { getCompanys, getCompany }
