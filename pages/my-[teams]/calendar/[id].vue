<template>

  <div class="col-start-2 xl:flex 2xl:flex">
    <div class="grid grid-cols-1 w-[90vw] xl:w-[50vw] 2xl:w-48w">
      <PageTitle
        ><IconBack @click="$router.go(-1)" class="mr-3 my-auto" /> Calendar
      </PageTitle>

      <CalendarMonth
        v-if="getCalendar"
        :lessons="lessonsState.data"
        @selectEvent="selectLesson"
      />
    </div>

    <!-- {{selectDayLessons}} -->
    <div
      class="
        grid grid-cols-1
        mt-[4vh]
        h-[10vh]
        xl:w-[25vw]
        2xl:w-[20vw]
        w-[80vw]
      "
    >
      <div>Event:</div>
      <div
        class="
          h-screen
          lg:h-[50vh]
          2xl:h-[50vh]
          lg:overflow-y-auto
          2xl:overflow-y-auto
        "
      >
        <EventCard
          v-for="event in getEvents"
          :key="event.id"
          :event="event"
        ></EventCard>
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
import CalendarMonth from '../../../components/global/Calendar/CalendarMonth.vue'
import EventCard from './components/EventCard.vue'
import PageTitle from '../../../components/global/PageTitle.vue'
import IconBack from '~/assets/css/icons/icon-go-back.svg'
import { useRoute } from 'vue-router'

const { state: lessonsState, load: loadLessons } = useLesssonsInject()

const route = useRoute()

const getCalendar = computed(() => {
  if (lessonsState.value.data) {
    return true
  } else {
    return false
  }
})

const selectDayLessons = ref([])

const getEvents = computed(() => {
  return selectDayLessons.value
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
  if (lessons) {
    selectDayLessons.value = lessons
  }
}

onMounted(() => {
  debugger
  loadLessons({
    id: parseInt(route.params.id as string),
  })
})
</script>

<style></style>
