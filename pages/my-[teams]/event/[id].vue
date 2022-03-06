<template>
  <div class="col-start-2 flex">
       <div class=" grid grid-cols-1 w-[80vw] m-auto">
          <PageTitle><IconBack class="mr-3 my-auto" @click="$router.go(-1)" /> Event </PageTitle>         
      
          <div v-for="video in getTmpVideosByPagination" :key="video.id">
            <div v-if="video.slide_type == 'document' && !video.url">
               <VideoSectionTitle :video="video" />
                     
            </div>
            <div v-else>
                  
                    <NuxtLink :to="`/my-teams/exercise-${route.params.id[0]}/4`" >  
                    <div class=" bg-white  rounded-lg">
                        <VideoRow :video="video" />
                    </div>
                     
                      </NuxtLink>
            </div>
          </div>
          <!-- <ExerciseCard :title="lessonState.data?.name" :videos="getTmpVideosByPagination" /> -->
          <!-- <NuxtLink :to="`/my-teams/exercise-${route.params.id[0]}/4`" v-for="video in getTmpVideosByPagination" :key="video.id" >   <ExerciseCard :video="video" /> </NuxtLink> -->
          <Pagination :total-pages="getTotalPages" :total="getTotal" :per-page="perPage" :current-page="currentPage" :maxVisibleButtons="maxVisibleButtons"
      :has-more-pages="hasMorePages" @pagechanged="showMore"></Pagination>

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
  import { useLessonInject } from '~~/contexts'
  import ExerciseCard from './components/ExerciseCard.vue'
  import PageTitle from '../../../components/global/PageTitle.vue'
  import Pagination from "../../../components/global/Pagination.vue"
  import VideoRow from './components/VideoRow.vue'
  import VideoSectionTitle  from './components/VideoSectionTitle.vue'
  import IconBack from '../../../assets/css/icons/icon-go back.svg' 

  const { state: lessonState, load: loadLesson } = useLessonInject()
  const route = useRoute();
  let page = ref(1)
  let maxVisibleButtons = ref(3)
  let totalPages= ref(4)
  let total= ref(40)
  let perPage = ref(4)
  let currentPage = ref(1)
  let hasMorePages = ref(true)

  const getTotalPages = computed(() =>{
    debugger;
     if(lessonState.value.status === 'success')
     {
       return    totalPages.value =  Math.ceil(lessonState.value.data?.videos.length /4)
     }
     else{
        return   totalPages.value
     }
 
  })
  const getTotal = computed(() =>{
     debugger;
       if(lessonState.value.status === 'success')
       {
          return     total.value =  lessonState.value.data?.videos.length
       }
       else{
         return total.value
       }

  }) 

  const getTmpVideosByPagination = computed(() =>{
     debugger;
     if(lessonState.value.status === 'success')
     {
        return lessonState.value.data?.videos.slice((currentPage.value - 1) * perPage.value, currentPage.value * perPage.value);
     }
     else{
       return []
     }
   
  })

  const showMore = (goToPage) => {
      debugger;
      page.value = goToPage;
      currentPage.value = goToPage;
  }

  onMounted(() => {
  loadLesson({
        id: parseInt(route.params.id[0]),
        skip: 1,
        pageSize: 4,
        filter: {
        },
      })
  })



</script>

<style></style>


