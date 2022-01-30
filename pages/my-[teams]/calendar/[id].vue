<template>
  <div class="col-start-2 flex">
       <div class="container grid grid-cols-1">
          <div class="container">
                  Calendar
          </div>
         

  
        <CalendarMonth v-if="lessonsState.data?.length>0" :lessons="lessonsState.data" @selectEvent="selectLesson" />

         
        </div>

{{selectDayLessons}}
     <div class="grid grid-cols-1">
       Event:
       <EventCard v-for="event in getEvents" :key="event.id" :event="event"></EventCard>
     </div>
  </div>
</template>



<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useLesssonsInject } from '~~/contexts/lessons_calander'
// import Calendar from './components/Calendar.vue'
import CalendarMonth from '../../../components/global/Calendar/CalendarMonth.vue'
import EventCard from './components/EventCard.vue'
import { useRoute } from 'vue-router';

const { state: lessonsState, load: loadLessons } = useLesssonsInject()

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
 loadLessons({
      id:  parseInt(route.params.id[0])
    })
})



</script>

<style></style>
