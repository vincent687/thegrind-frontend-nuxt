import { useAccountProvide, useAccountInject } from './account'
// import { usePostProvide, usePostInject } from './post'
import { useHamurgerProvide, useHamburgerInject } from './hamburger'
import { useCoursesProvide,useCoursesInject } from './my_course_listing'
import { useLessonsProvide, useLesssonsInject } from './lessons_calander';
import { useLessonInject, useLessonProvide } from './lesson_video_listing';
import { useVideoProvide, useVideoInject } from './lesson_video_detail';
import { useCompanysProvide, useCompanysInject } from './company_listing';

export { useAccountInject, useHamburgerInject, useCoursesInject, useLesssonsInject, useLessonInject, useVideoInject, useCompanysInject }

export const useProvider = () => {
  useAccountProvide()
  useHamurgerProvide()
  useCoursesProvide()
  useLessonsProvide()
  useLessonProvide()
  useVideoProvide()
  useCompanysProvide()
  // usePostProvide()
}
