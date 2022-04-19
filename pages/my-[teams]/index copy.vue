<template>
  
    <div>
      <DesktopView v-if="!getMobile" :state="courseState" :courses="courseState.data"></DesktopView>
      <MobileView v-else :courses="courseState.data" :state="courseState"></MobileView>
    </div>

   

  

  

  
<!-- <div>
      <DesktopView v-if="!getMobile" :state="courseState" :courses="courseState.data"></DesktopView>
      <MobileView v-else :courses="courseState.data" :state="courseState"></MobileView>
    </div> -->

 
</template>



<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import DesktopView from './components/DesktopView.vue'
import MobileView from './components/MobileView.vue'

import { useCoursesInject, useDeviceInject } from '../../contexts'
import { Course } from '~~/model/course'
import { checkIfEmpty, isMobile } from "~~/utils/global" 
import { NuxtLayout, NuxtLink } from '../../.nuxt/components';


definePageMeta({
  layout: 'teams',
});

const { state: courseState, load: loadCourse } = useCoursesInject()
// let currentCourse = ref({})
let mobile=  ref(false)
const route = useRoute()
// const getCurrentCourse = computed(() => {
//   return  currentCourse.value
// })
const getMobile = computed(() => {
  return  mobile.value
})

// const courseClicked = (course: Course) => {
//      debugger;
//      currentCourse.value = course
// }


onMounted(() => {
  //route.meta.layout = "teams"
  let user = sessionStorage.getItem('user')
  const userObj = JSON.parse(user);
  mobile.value = isMobile()
  loadCourse({
      skip: 1,
      pageSize: 4,
      filter: {
      },
      email: userObj.email
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


