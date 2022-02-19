<script setup lang="ts">
import Carousel from '../components/carousel'
import HamburgerContent  from '../components/global/HamburgerContent.vue'
import Header from '../components/global/Header.vue'
import { useHamburgerInject } from '@/contexts'



const { currentHamburger } = useHamburgerInject()


</script>

<template>
  <div class="bg-main-green h-screen bg-cover grid expand">
    <div class="col-start-2 row-start-2">
      <slot  />
    </div>
  </div>
</template>

<style scoped>
.expand {
  grid-template-columns: [first] 24vw [line2] auto [col3-start] 24vw [end];
  grid-template-rows: 4rem  16rem 39rem ;
  /* grid-template-columns: [first] 26vw [line2] auto [col3-start] 20vw [end]; */
} 
.unexpand {
  grid-template-columns: [first] 5vw [line2] auto [col3-start] 20vw [end];
}


</style>


