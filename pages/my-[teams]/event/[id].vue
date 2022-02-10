<template>
  <div class="col-start-2 flex">
       <div class="container grid grid-cols-1">
          <div class="container">
                  Event
          </div>
    
          <NuxtLink :to="`/my-teams/exercise-${route.params.id[0]}/4`" v-for="video in lessonState.data?.videos" :key="video.id" >   <ExerciseCard :video="video" /> </NuxtLink>
      

        </div>

  </div>
</template>



<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useLessonInject } from '~~/contexts'
import ExerciseCard from './components/ExerciseCard.vue'


const { state: lessonState, load: loadLesson } = useLessonInject()
const route = useRoute();


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


