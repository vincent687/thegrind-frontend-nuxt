import axios from 'axios'


//https://thegrind-backend-5x42fcw6uq-df.a.run.app/tutors
const getCourses = (params: any) => {
  // axios.get('/api/user/getUserInfo').then(({ data }) => {

  // })
  debugger
  return axios.get('/api/tutor')
}

const getLessons = (params: any) => {
  return axios.get('/api/lessons')
}

const getLesson = (id: number) => {
  return axios.get('/api/lessons/4')
}

export {  getCourses,getLessons, getLesson }
