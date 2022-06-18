import { axios } from './axios'



//const config = useRuntimeConfig()

const getTheGrindFrontPage = () => {
  // axios.get('/api/user/getUserInfo').then(({ data }) => {


  return axios.get('https://thegrind-strapi-5x42fcw6uq-df.a.run.app/api/thegrinds?populate=*')
}


export { getTheGrindFrontPage }
