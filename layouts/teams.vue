<script setup lang="ts">
import Carousel from '../components/carousel'
import HamburgerContent from '../components/global/HamburgerContent.vue'
import Header from '../components/global/Header.vue'
import { useHamburgerInject, useDeviceInject } from '@/contexts'
import teamsMobile from './teamsMobile.vue'

const { currentHamburger } = useHamburgerInject()
const { isMobile, setDevice } = useDeviceInject()
const mobile = ref(false)
const getMobile = computed(() => {
  return mobile.value
})

onBeforeMount(() => {
        document.body.className = 'intro';
    })

onMounted(() => {
  debugger
  setDevice()
  //mobile.value = isMobile();
})
</script>



<template>

  <div v-if="!isMobile" class="bg-gray">
    <Header></Header>
    <div
      :class="{ unexpand: currentHamburger }"
      class="grid expand w-screen h-screen"
    >
      <HamburgerContent
        class="col-start-1 row-start-1 ml-12"
      ></HamburgerContent>

 
      <div class="col-start-2">
        <slot />
      </div>
    </div>
  </div>
  <teamsMobile v-else><slot /></teamsMobile>
</template>

<style scoped>
.expand {
  grid-template-columns: [first] 16vw [line2] auto [end];
  /* grid-template-columns: [first] 16vw [line2] auto [col3-start] 20vw [end];  */
}
.unexpand {
  grid-template-columns: [first] 5vw [line2] auto [col3-start] 20vw [end];
}

@media only screen and (min-width: 1024px) {
  .expand {
    grid-template-columns: [first] 22vw [line2] auto [end];
  }
}
</style>
