<template>

  <div class="mb-[100px]">

    <DesktopView v-if="!getMobile" :state="courseState" :courses="courseState.data"></DesktopView>
    <MobileView v-else :courses="courseState.data" :state="courseState"></MobileView>

     <Pagination  v-if="getMobile" class="w-[91vw]" :total-pages="getTotalPages" :total="getTotal" :per-page="perPage" :current-page="currentPage" :maxVisibleButtons="maxVisibleButtons"
      :has-more-pages="hasMorePages" @pagechanged="showMore"></Pagination>
            <Pagination v-else  :total-pages="getTotalPages" :total="getTotal" :per-page="perPage" :current-page="currentPage" :maxVisibleButtons="maxVisibleButtons"
            :has-more-pages="hasMorePages" @pagechanged="showMore"></Pagination>
  </div>
  
 
</template>


<script lang="ts">


</script>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import DesktopView from './components/DesktopView.vue'
import MobileView from './components/MobileView.vue'

import { useCoursesInject, useDeviceInject } from '../../contexts'
import { Course } from '~~/model/course'
import { checkIfEmpty, isMobile } from "~~/utils/global" 
import Pagination from '~/components/global/Pagination.vue'


definePageMeta({
layout: "teams",
});

const { state: courseState, load: loadCourse } = useCoursesInject()
let mobile=  ref(false)
let totalPages= ref(4)
let total= ref(40)
let perPage = ref(15)
let currentPage = ref(1)
let hasMorePages = ref(true)
let maxVisibleButtons = ref(3)
let email= ref("")

const getTotalPages = computed(() =>{
     if(courseState.value.status === 'success')
     {
       return    totalPages.value =  Math.ceil(courseState.value.data?.length /15)
     }
     else{
        return   totalPages.value
     }
 
})
const getTotal = computed(() =>{
       if(courseState.value.status === 'success')
       {
          return     total.value =  courseState.value.data?.length
       }
       else{
         return total.value
       }

}) 

const getMobile = computed(() => {
  return  mobile.value
})


const showMore = (goToPage) => {
      currentPage.value = goToPage;
      getData();
}



const getData = () => {
  loadCourse({
        skip: currentPage.value ,
        pageSize: 4,
        filter: {
        },
        email: email.value
      })
}


onMounted(() => {
  mobile.value = isMobile()
  let user = sessionStorage.getItem('user')
    
    if(user)
    {
      const userObj = JSON.parse(user);
      email.value = userObj.email;
      getData()
    }
 
  // await getUser({}).then((res) => {
  //   debugger
  //   console.log('getUser')
  //   console.log(res)
  //   info.value = res.data.data
  // })
})



</script>

<style></style>


