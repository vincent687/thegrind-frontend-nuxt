<script setup lang="ts">
import Carousel from '../components/carousel'
import Hamburger  from '../components/global/Hamburger.vue'
import Header from '../components/global/Header.vue'
</script>

<template>
  <div>
     <Header></Header>
    <div class="grid w-screen h-screen">
         <Hamburger class="col-start-1 row-start-3 "></Hamburger>
  <Carousel class="col-start-1 col-end-3"></Carousel>

  <!-- <Hamburger></Hamburger>
  <Carousel></Carousel> -->
  <div class="col-start-2 row-start-3">
      <slot/>
  </div>
    </div>
  </div>
</template>
