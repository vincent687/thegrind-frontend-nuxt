<script setup lang="ts">
import Carousel from '../components/carousel'
import HamburgerContent  from '../components/global/HamburgerContent.vue'
import Header from '../components/global/Header.vue'
import { useHamburgerInject } from '@/contexts'



const { currentHamburger } = useHamburgerInject()


</script>

<script lang="ts">
export default {
  name: "teams"
}
</script>

<template>
  <div class="bg-gray">
     <Header></Header>
    <div :class="{ unexpand: !currentHamburger }" class="grid expand w-screen h-screen">
  <!-- <Carousel class="row-start-1 col-start-1 col-end-3"></Carousel> -->
<HamburgerContent class="col-start-1 row-start-1 ml-12 "></HamburgerContent>
  <!-- <Hamburger></Hamburger>
  <Carousel></Carousel> -->
  
  <div class="col-start-2">
      <slot/>
  </div>
    </div>
  </div>
</template>

<style scoped>
.expand {
  grid-template-columns: [first] 16vw [line2] auto [end];
  /* grid-template-columns: [first] 16vw [line2] auto [col3-start] 20vw [end];  */
} 
.unexpand {
  grid-template-columns: [first] 5vw [line2] auto [col3-start] 20vw [end];
}

</style>


