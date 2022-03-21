<template>
  <div class="w-screen md:w-screen lg:flex items-center justify-center lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]">
 
    <LeftTitle class="sm: w-[97vw] lg:w-[60vw] mr-[11px]"></LeftTitle>
    <Carousel class="w-full"></Carousel>
  </div>
  <vue-horizontal class="w-screen lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]" responsive>
      <NewsCard></NewsCard>
      <NewsCard></NewsCard>
      <NewsCard></NewsCard>
    
  </vue-horizontal>
 
  <ContactUsCard class="w-[94vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]"></ContactUsCard>
    <NuxtLink :to="`/about`"> about </NuxtLink>
     <NuxtLink :to="`/login`"> login </NuxtLink>
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
import VueHorizontal from 'vue-horizontal'

import { useAccountInject } from '../contexts'
import Carousel from '~~/components/Carousel.vue'

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
