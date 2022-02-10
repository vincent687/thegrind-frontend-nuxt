import { useAccountProvide, useAccountInject } from './account'
// import { usePostProvide, usePostInject } from './post'
import { useHamurgerProvide, useHamburgerInject } from './hamburger'
import { useCoursesProvide,useCoursesInject } from './my_course_listing'
import { useLessonsProvide, useLesssonsInject } from './lessons_calander';
import { useLessonInject, useLessonProvide } from './lesson_video_listing';
import { useVideoProvide, useVideoInject } from './lesson_video_detail';

export { useAccountInject, useHamburgerInject, useCoursesInject, useLesssonsInject, useLessonInject, useVideoInject }

export const useProvider = () => {
  useAccountProvide()
  useHamurgerProvide()
  useCoursesProvide()
  useLessonsProvide()
  useLessonProvide()
  useVideoProvide()
  // usePostProvide()
}
