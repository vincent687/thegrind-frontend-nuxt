<template>
  <div class="flex items-center justify-center">
 
    <LeftTitle></LeftTitle>
    <Carousel></Carousel>
  </div>
  <div class="flex">
      <NewsCard></NewsCard>
      <NewsCard></NewsCard>
      <NewsCard></NewsCard>
  </div>
  <ContactUsCard></ContactUsCard>
    <NuxtLink :to="`/about`"> about </NuxtLink>
    <NuxtLink :to="`/users-admins/1`"> admins </NuxtLink>
    <NuxtLink :to="`/my-teams`"> teams </NuxtLink>
    <NuxtLink :to="`/my-teams/calendar/1`"> teams_calendar </NuxtLink>
    <NuxtLink :to="`/video`"> teams_calendar </NuxtLink>
</template>

<script lang="ts">
export default {
  layout: 'default',
}
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getUser } from '../api/login'
import LeftTitle  from './components/LeftTitle.vue'
import NewsCard from './components/NewsCard.vue'
import ContactUsCard from './components/ContactUsCard.vue'

import { useAccountInject } from '../contexts'
import Carousel from '~~/components/carousel.vue'

const { state: accountState, load: loadAccount } = useAccountInject()

const { data: notes } = await useAsyncData('data', () =>
  $fetch('https://jsonplaceholder.typicode.com/todos')
)
//let info = ref({})
// await getUser({}).then((res) => {
//   debugger
//   console.log('getUser')
//   console.log(res)
//   info.value = res.data
// })

onMounted(() => {
  debugger
  loadAccount('start', '123')
  // await getUser({}).then((res) => {
  //   debugger
  //   console.log('getUser')
  //   console.log(res)
  //   info.value = res.data.data
  // })
})

const filteredNotes = computed(() => {
  return notes.value.slice(0, 5)
})
</script>

<style></style>
