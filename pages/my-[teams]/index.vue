<template>
<NuxtLayout>
  <div>
      <DesktopView v-if="!getMobile" :state="courseState" :courses="courseState.data"></DesktopView>
      <MobileView v-else :courses="courseState.data" :state="courseState"></MobileView>
    </div>
</NuxtLayout>
  

  
<!-- <div>
      <DesktopView v-if="!getMobile" :state="courseState" :courses="courseState.data"></DesktopView>
      <MobileView v-else :courses="courseState.data" :state="courseState"></MobileView>
    </div> -->

 
</template>


<script lang="ts">

export default {
  layout:  'teams' ,
  //layout: 'teams'
}

</script>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import DesktopView from './components/DesktopView.vue'
import MobileView from './components/MobileView.vue'

import { useCoursesInject, useDeviceInject } from '../../contexts'
import { Course } from '~~/model/course'
import { checkIfEmpty, isMobile } from "~~/utils/global" 
import { NuxtLayout } from '../../.nuxt/components';


definePageMeta({
  layout: false,
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
  route.meta.layout = "teams"
  mobile.value = isMobile()
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


