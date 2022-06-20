<template>
  <div class="col-start-2 flex">

    <div class="grid grid-cols-1 w-[90vw] xl:w-[70vw] 2xl:w-[76vw] m-auto">
      <PageTitle> Event </PageTitle>

      <ExerciseCard title="All Exercise" :videos="getTmpVideosByPagination" />
      <!-- <NuxtLink :to="`/my-teams/exercise-${route.params.id[0]}/4`" v-for="video in getTmpVideosByPagination" :key="video.id" >   <ExerciseCard :video="video" /> </NuxtLink> -->
      <Pagination
        :total-pages="getTotalPages"
        :total="getTotal"
        :per-page="perPage"
        :current-page="currentPage"
        :maxVisibleButtons="maxVisibleButtons"
        :has-more-pages="hasMorePages"
        @pagechanged="showMore"
      ></Pagination>
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
import { useCourseVideoInject } from '~~/contexts'
import ExerciseCard from './components/ExerciseCard.vue'
import PageTitle from '../../../components/global/PageTitle.vue'
import Pagination from '../../../components/global/Pagination.vue'

const { state: courseVideoState, load: loadCourseVideo } =
  useCourseVideoInject()
const route = useRoute()
let page = ref(1)
let maxVisibleButtons = ref(3)
let totalPages = ref(4)
let total = ref(40)
let perPage = ref(4)
let currentPage = ref(1)
let hasMorePages = ref(true)

const getTotalPages = computed(() => {
  if (courseVideoState.value.status === 'success') {
    return (totalPages.value = Math.ceil(
      courseVideoState.value.data?.length / 4
    ))
  } else {
    return totalPages.value
  }
})
const getTotal = computed(() => {
  if (courseVideoState.value.status === 'success') {
    return (total.value = courseVideoState.value.data?.length)
  } else {
    return total.value
  }
})

const getTmpVideosByPagination = computed(() => {
  if (courseVideoState.value.status === 'success') {
    return courseVideoState.value.data?.slice(
      (currentPage.value - 1) * perPage.value,
      currentPage.value * perPage.value
    )
  } else {
    return []
  }
})

const showMore = (goToPage) => {
  page.value = goToPage
  currentPage.value = goToPage
}

onMounted(() => {
  loadCourseVideo({
    id: parseInt(route.params.id as string),
    skip: 1,
    pageSize: 4,
    filter: {},
  })
})
</script>

<style></style>
