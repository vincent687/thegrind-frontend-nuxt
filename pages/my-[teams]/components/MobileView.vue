<template>
  <div class="col-start-2 flex">
       <div class="grid grid-cols-1 w-[80vw] 2xl:w-[48w] ml-[3vw]">
          <PageTilte>My Team</PageTilte>
          <SearchBar></SearchBar>
          <!-- <div class="container">
                  My Team
          </div> -->
          <div v-if="state.status !='success' ">
            No record
          </div>
          <div v-else>
              <vue-horizontal class="w-screen lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]" responsive>
                  <CourseCard class="m-9" v-for="course in courses" :key="course.id" :course="course" @click="courseClicked"></CourseCard>
                </vue-horizontal>
          </div>
     
        </div>


    </div>

        

      <div class="grid grid-cols-1 w-[85vw] 2xl:w-[29vw] mr-[2vw]">
       <NoticeCard :course="getCurrentCourse"></NoticeCard>

       <DescriptionCard  v-if="checkIfEmpty(getCurrentCourse)"  :course="getCurrentCourse"></DescriptionCard>
     </div>
 
 
</template>


<script setup lang="ts">
import { defineProps,defineEmits, ref, Ref } from 'vue'
import { Course, Tutor } from '~~/model/course'
import CourseCard from './CourseCard.vue'
import DescriptionCard from './DescriptionCard.vue'
import NoticeCard from './NoticeCard.vue'
import SearchBar from './SearchBar.vue'
import { checkIfEmpty } from "~~/utils/global" 
import VueHorizontal from 'vue-horizontal'
import { State } from '~~/contexts/my_course_listing'
import PageTilte from '../../../components/global/PageTitle.vue'

defineProps<{ courses: Tutor[], state: Ref<State> }>()
let currentCourse = ref({})

const getCurrentCourse = computed(() => {
  return  currentCourse.value
})


const courseClicked = (course: Course) => {
     debugger;
     currentCourse.value = course
}


</script>