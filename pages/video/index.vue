<template>
  <div class="col-start-2 flex">
    <div class="grid grid-cols-1 w-[86vw] lg:w-[73vw] m-auto">
      <div class="flex justify-between">
        <PageTitle>Video</PageTitle>
        <NuxtLink :to="`/video/upload`">
          <ButtonUpload v-if="!isMobile" /> <IconUpload v-else
        /></NuxtLink>
      </div>
      <div
        class="
          relative
          grid grid-cols-1
          bg-white
          h-[79vh]
          p-3
          rounded-[2.5rem]
          shadow-md
          2xl:h-[80vh]
        "
      >
        <div class="overflow-y-auto">
          <NuxtLink
            :to="`/my-teams/exercise-4/4`"
            v-for="video in getTmpVideosByPagination"
            :key="video.id"
          >
            <VideoListView :video="video" />
          </NuxtLink>
        </div>

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

      <!-- <div v-if="courseState !='success' ">
            No record
          </div>

          <div v-else >
              <VideoListView></VideoListView>
          </div> -->
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
import Pagination from '../../components/global/Pagination.vue'
import PageTitle from '../../components/global/PageTitle.vue'
import { Video } from '~~/model/lesson'
import { useLessonInject, useDeviceInject } from '~~/contexts'
import VideoListView from './components/VideoListView.vue'
import ButtonUpload from '../../assets/css/icons/button-upload.svg'
import IconUpload from '../../assets/css/icons/icon-upload.svg'

let page = ref(1)
let maxVisibleButtons = ref(3)
let totalPages = ref(4)
let total = ref(40)
let perPage = ref(4)
let currentPage = ref(1)
let hasMorePages = ref(true)

let currentCourse = ref({})

const { state: lessonState, load: loadLesson } = useLessonInject()
const { isMobile } = useDeviceInject()

const getCurrentCourse = computed(() => {
  return currentCourse.value
})

const getTotalPages = computed(() => {
  debugger
  if (lessonState.value.status === 'success') {
    return (totalPages.value = Math.ceil(
      lessonState.value.data?.videos.length / 4
    ))
  } else {
    return totalPages.value
  }
})
const getTotal = computed(() => {
  debugger
  if (lessonState.value.status === 'success') {
    return (total.value = lessonState.value.data?.videos.length)
  } else {
    return total.value
  }
})

const getTmpVideosByPagination = computed(() => {
  debugger
  if (lessonState.value.status === 'success') {
    return lessonState.value.data?.videos.slice(
      (currentPage.value - 1) * perPage.value,
      currentPage.value * perPage.value
    )
  } else {
    return []
  }
})

const route = useRoute()

const showMore = (goToPage) => {
  debugger
  page.value = goToPage
  currentPage.value = goToPage
}

onMounted(() => {
  loadLesson({
    id: 4,
    skip: 1,
    pageSize: 4,
    filter: {},
  })
})
</script>

<style>
.van-popup {
  background-image: url('~/assets/css/icons/background.png');
}
</style>
