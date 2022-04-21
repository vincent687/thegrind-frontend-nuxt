<template>
  <div class="col-start-2 lg:flex 2xl:flex">
       <div class="grid grid-cols-1 w-[90vw] lg:w-48w 2xl:w-48w">
          <PageTitle>Calendar</PageTitle>

          <CalendarMonth v-if="lessonsState.data?.length>0" :lessons="lessonsState.data" @selectEvent="selectLesson" />

         
        </div>

<!-- {{selectDayLessons}} -->
     <div class="grid grid-cols-1 mt-[4vh] h-[10vh] lg:w-[40vw] 2xl:w-[20vw] w-[80vw]">
       <div>Event:</div>
       <div class=" h-screen lg:h-[50vh]  2xl:h-[50vh]  lg:overflow-y-auto  2xl:overflow-y-auto">
         
          <EventCard v-for="event in getEvents" :key="event.id" :event="event"></EventCard>
       </div>
     </div>
  </div>
</template>



<script lang="ts">
export default {
  layout: 'teams',
}
</script>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useLesssonsInject } from '~~/contexts/lessons_calander'
// import Calendar from './components/Calendar.vue'
import CalendarMonth from '../../components/global/Calendar/CalendarMonth.vue'
import EventCard from './components/EventCard.vue'
import PageTitle from '../../components/global/PageTitle.vue'
import { useRoute } from 'vue-router';
import { useMyCalendarInject } from '~~/contexts'

// const { state: lessonsState, load: loadLessons } = useLesssonsInject()
const { state: lessonsState, load: loadLessons } = useMyCalendarInject()

const route = useRoute();


const selectDayLessons = ref([])

const getEvents = computed(() => {
  return  selectDayLessons.value
})

// const { state: courseState, load: loadCourse } = useCoursesInject()
// let currentCourse = ref({})

// const getCurrentCourse = computed(() => {
//   return  currentCourse.value
// })

// const courseClicked = (course: Course) => {
//      currentCourse.value = course
// }

const selectLesson = (lessons) => {
  debugger
  if(lessons)
  {
     selectDayLessons.value = lessons
  }

}

onMounted(() => {
  debugger;
  let user = sessionStorage.getItem('user')
  if(user)
    {
      const userObj = JSON.parse(user);
      loadLessons(userObj.email);
  }

})



</script>

<style></style>
