<template>
  <div class="col-start-2 flex h-[77vh]">
    <div class="grid grid-rows-[50px]  grid-cols-1 w-[42vw] 2xl:w-[48w] ml-[3vw]">
      <PageTilte>My Team</PageTilte>
   
      <div v-if="state.status != 'success'">No record</div>

      <div v-else>
        <div class="mt-5 grid grid-cols-2 gap-1 sm:grid-cols-2 lg:grid-cols-2">
       <CourseCard v-for="course in  courses" :key="course.id"
            class="ml-[1rem] mt-[0.4rem] mb-[1rem] 2xl:m-9"
            :course="course"
            @click="courseClicked"
          ></CourseCard>
    </div>
           <!-- <div class="flex" v-for="rowIdx in Math.ceil(courses.length / 2)" :key="rowIdx">
         
                        <div class="one-third column" v-for="course in  courses.slice(2 * (rowIdx - 1), 2 * rowIdx)" :key="course.id">
                           <CourseCard
            class="ml-[1rem] mt-[0.4rem] mb-[1rem] 2xl:m-9"
            :course="course"
            @click="courseClicked"
          ></CourseCard>
                        </div>
            </div> -->

  
      </div>
    </div>

    <div class="grid grid-cols-1 w-[29vw] mr-[2vw]">
      <div>
        <SearchBar></SearchBar>
        <NoticeCard :course="getCurrentCourse"></NoticeCard>
      </div>
 
      <DescriptionCard
        v-if="checkIfEmpty(getCurrentCourse)"
        :course="getCurrentCourse"
      ></DescriptionCard>
    </div>

  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, Ref } from 'vue'
import { Course, Tutor } from '~~/model/course'
import CourseCard from './CourseCard.vue'
import DescriptionCard from './DescriptionCard.vue'
import NoticeCard from './NoticeCard.vue'
import SearchBar from './SearchBar.vue'
import { checkIfEmpty } from '~~/utils/global'
import { State } from '~~/contexts/my_course_listing'
import PageTilte from '../../../components/global/PageTitle.vue'

defineProps<{ courses: Tutor[]; state: Ref<State> }>()
let currentCourse = ref({})

const getCurrentCourse = computed(() => {
  return currentCourse.value
})

const courseClicked = (course: Course) => {
  currentCourse.value = course
}
</script>
