import { useAccountProvide, useAccountInject } from './account'
// import { usePostProvide, usePostInject } from './post'
import { useHamurgerProvide, useHamburgerInject } from './hamburger'
import { useCoursesProvide,useCoursesInject } from './my_course_listing'
import { useLessonsProvide, useLesssonsInject } from './lessons_calander';
import { useLessonInject, useLessonProvide } from './lesson_video_listing';
import { useVideoProvide, useVideoInject } from './lesson_video_detail';
import { useCompanysProvide, useCompanysInject } from './company_listing';
import { useDeviceInject, useDeviceProvide } from './device';
import { useCompanyProvide, useCompanyInject } from './company_detail';
import { useCourseVideoInject, useCourseVideoProvide } from './course_video_listing';
import { useMyVideoInject, useMyVideoProvide } from './my_video_listing';
import { useMyVideoDetailInject, useMyVideoDetailProvide } from './my_video_detail';
import { useMyCalendarInject, useMyCalendarProvide } from './my_calendar';

export { useAccountInject, useHamburgerInject, useCoursesInject, useLesssonsInject, useLessonInject, useVideoInject, useCompanysInject, useDeviceInject, useCompanyInject, useCourseVideoInject, useMyVideoInject, useMyVideoDetailInject,useMyCalendarInject  }

export const useProvider = () => {
  useAccountProvide()
  useHamurgerProvide()
  useCoursesProvide()
  useLessonsProvide()
  useLessonProvide()
  useVideoProvide()
  useCompanysProvide()
  useDeviceProvide()
  useCompanyProvide()
  useCourseVideoProvide()
  useMyVideoProvide()
  useMyVideoDetailProvide()
  useMyCalendarProvide()
  // usePostProvide()
}
