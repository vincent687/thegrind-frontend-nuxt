import User from './user'
import FileModel from './file'

export type Lesson = {
  id: number
  name: string
  created_date: string
  createdby_user: number
  start_date: string
  end_date: string
  location: string
  company_id: number
  description: string
  course_id: number
  tutors: User[]
  students: User[]
  videos: FileModel[]
}
