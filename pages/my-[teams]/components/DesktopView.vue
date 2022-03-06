<template>
<div class="col-start-2 flex">
       <div class="grid grid-cols-1 w-48w ml-[3vw]">
          <PageTilte>My Team</PageTilte>
          <!-- <div class="container">
                  My Team
          </div> -->
          <div v-if="state.status !='success' ">
            No record
          </div>

          <div v-else >
                    <div class="inline-block">
                    <CourseCard class="m-9" v-for="index in 2" :key="index" :course="courses[index - 1]" @click="courseClicked"></CourseCard>
                    </div>
                    <div class="inline-block">
                      <CourseCard class="m-9" v-for="index in 2" :key="index" :course="courses[index + 1]" @click="courseClicked"></CourseCard>
                    </div>
        
 
          </div>
        
        </div>

 

    <div class="grid grid-cols-1 w-[29vw] mr-[2vw]">
       <SearchBar></SearchBar>
       <NoticeCard :course="getCurrentCourse"></NoticeCard>

       <DescriptionCard  v-if="checkIfEmpty(getCurrentCourse)"  :course="getCurrentCourse"></DescriptionCard>
     </div>
    
  <!-- <div class="col-start-2 flex">
      

          <div >

                    <div class="inline-block">
                    <CourseCard class="m-9" v-for="index in 2" :key="index" :course="courses[index - 1]" @click="courseClicked"></CourseCard>
                    </div>
                    <div class="inline-block">
                      <CourseCard class="m-9" v-for="index in 2" :key="index" :course="courses[index + 1]" @click="courseClicked"></CourseCard>
                    </div>
              
          </div>
        

      <div class="grid grid-cols-1 w-[29vw] mr-[2vw]">
       <SearchBar></SearchBar>
       <NoticeCard :course="getCurrentCourse"></NoticeCard>

       <DescriptionCard  v-if="checkIfEmpty(getCurrentCourse)"  :course="getCurrentCourse"></DescriptionCard>
     </div>
  </div> -->
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