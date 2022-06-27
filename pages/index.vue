<template>
   <div>
     <div
     class="
          w-screen
          md:w-screen
          lg:flex
          items-center
          justify-center
          lg:w-[80vw]
          xl:w-[70vw]
          2xl:w-[60vw]
     "
     >
       <LeftTitle class="sm:w-[97vw] lg:w-[60vw] mr-[11px]"></LeftTitle>
       <Carousel class="w-full" :slider="notes.data[0].attributes.Slider.data"></Carousel>
     </div>

     <vue-horizontal class="w-screen lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]">
          <NewsCard :content="notes.data[0].attributes.notices.data[0].attributes.Notice1"></NewsCard>
          <NewsCard :content="notes.data[0].attributes.notices.data[0].attributes.Notice2"></NewsCard>
          <NewsCard :content="notes.data[0].attributes.notices.data[0].attributes.Notice3"></NewsCard>
     </vue-horizontal>

     <ContactUsCard class="w-[88vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw]"></ContactUsCard>
   </div>
</template>

<script setup lang="ts">
import LeftTitle from './components/LeftTitle.vue'
import NewsCard from './components/NewsCard.vue'
import Carousel from '../components/Carousel.vue'
import ContactUsCard from './components/ContactUsCard.vue'
import VueHorizontal from 'vue-horizontal'

definePageMeta({
layout: "default",
});

// const { data: notes } = await useAsyncData('data', () =>
//      $fetch('https://thegrind-strapi-5x42fcw6uq-df.a.run.app/api/thegrinds?populate=*')
// )

const { data: notes } = await useAsyncData('data', () =>
     $fetch('/api/home')
)

</script>

<style></style>
