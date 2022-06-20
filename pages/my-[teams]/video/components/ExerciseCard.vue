<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { Video } from '~~/model/lesson'
import VideoRow from './VideoRow.vue'

let props = defineProps<{ videos: Video[]; title: String }>()
const { title, videos } = toRefs(props)
const route = useRoute()

//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value
//   }
</script>

<template>

  <div
    class="
      relative
      grid grid-cols-1
      bg-white
      rounded-lg
      shadow-md
      overflow-y-auto
    "
  >
    <div class="bg-green-default h-12 rounded-t-lg border-b-4">
      <p class="text-green-light text-center text-3xl">{{ title }}</p>
    </div>
    <NuxtLink
      :to="`/my-teams/exercise-${route.params.id}/${video.id}`"
      v-for="video in videos"
      :key="video.id"
    >
      <VideoRow :video="video" />
    </NuxtLink>
    <!-- <div class="flex">
                <img :src="video.thumbnail" alt="thumbnail" class="h-40" width="288"/>
                <p>Description: {{ video.description }}</p>
            </div> -->
  </div>
</template>
