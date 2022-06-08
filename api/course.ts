import { Attendance } from '~~/model/attendance'
import { FindMyCoursesParams } from '~~/model/query_schema'
import {axios} from './axios'


//https://thegrind-backend-5x42fcw6uq-df.a.run.app/tutors
const getCourses = (params: any) => {
  // axios.get('/api/user/getUserInfo').then(({ data }) => {

  // })
  debugger
 // return axios.get('/api/tutor')
 return axios.get('/tutors')
}

const getLessonDetail = (id: number, courseId: number) => {
  debugger
  // return axios.get('/api/tutor')
  return axios.get(`/lessonsNonOdoo/${id}`, { params: { courseId: courseId } })
}

const attendLesson = (attendance: Attendance) => {
  debugger
  return axios.post('/student-attendancesNonOdoo/attendLesson', attendance)
  // return axios.get('/api/tutor')
}



const getMyCourses = (params: FindMyCoursesParams) => {
  // axios.get('/api/user/getUserInfo').then(({ data }) => {

  // })
  debugger
 // return axios.get('/api/tutor')
 return axios.get(`/my-lessons/email/${params.email}`, {
    params: {
        page: params.skip,
        pageSize: params.pageSize,
    },
  })
}


const getLessons = (params: any) => {
  // return axios.get('/api/lessons')
  return axios.get('/lessons')
}

const getLessonsByClassId = (id: number) => {
  return axios.get(`/lessons/class/${id}`)
}

const getLesson = (id: number) => {
  //return axios.get('/api/lessons/4')
  return axios.get(`lessons/${id}`)
}

const getVideoByCourseId = (id: number) => {
  return axios.get(`videos/videoSection/${id}`)
}
const getVideosWithSection = (id: number) => {
 // return axios.get('/api/videos/videoSection/17')
 return axios.get(`videos/videoSection/${id}`)
}

const getVideo = (id: number) => {
  //return axios.get('/api/videos/4')
  return axios.get(`videos/${id}`)
}



export {  getCourses,getLessons, getLesson, getVideo , getVideosWithSection,getVideoByCourseId, getMyCourses, getLessonsByClassId,  getLessonDetail,attendLesson }
