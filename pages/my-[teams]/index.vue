<template>
  <div class="col-start-2 flex">
       <div class="grid grid-cols-1 w-48w ml-[3vw]">
          <PageTilte>My Team</PageTilte>
          <!-- <div class="container">
                  My Team
          </div> -->
          <div v-if="courseState.status !='success' ">
            No record
          </div>

          <div v-else >
                  <div class="inline-block">
                    <CourseCard class="m-9" v-for="index in 2" :key="index" :course="courseState.data[index - 1]" @click="courseClicked"></CourseCard>
                  </div>
                  <div class="inline-block">
                    <CourseCard class="m-9" v-for="index in 2" :key="index" :course="courseState.data[index + 1]" @click="courseClicked"></CourseCard>
                </div>
          </div>
        </div>

      <div class="grid grid-cols-1 w-[29vw] mr-[2vw]">
       <SearchBar></SearchBar>
       <NoticeCard :course="getCurrentCourse"></NoticeCard>
       <DescriptionCard :course="getCurrentCourse"></DescriptionCard>
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
import CourseCard from './components/CourseCard.vue'
import DescriptionCard from './components/DescriptionCard.vue'
import NoticeCard from './components/NoticeCard.vue'
import SearchBar from './components/SearchBar.vue'
import PageTilte from '../../components/global/PageTitle.vue'
import { useCoursesInject } from '../../contexts'
import { Course } from '~~/model/course'


const { state: courseState, load: loadCourse } = useCoursesInject()
let currentCourse = ref({})

const getCurrentCourse = computed(() => {
  return  currentCourse.value
})

const courseClicked = (course: Course) => {
     debugger;
     currentCourse.value = course
}


onMounted(() => {
 loadCourse({
      skip: 1,
      pageSize: 4,
      filter: {
      },
    })
  // await getUser({}).then((res) => {
  //   debugger
  //   console.log('getUser')
  //   console.log(res)
  //   info.value = res.data.data
  // })
})



</script>

<style></style>


