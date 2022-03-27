<script setup lang="ts">
import Carousel from '../components/carousel'
import HamburgerContent from '../components/global/HamburgerContent.vue'
import Header from '../components/global/Header.vue'
import { useHamburgerInject } from '@/contexts'
import { useRouter } from 'vue-router'

debugger
const router = useRouter()

const { currentHamburger } = useHamburgerInject()
</script>

<template>
  <div
    :class="{ row: router.currentRoute.value.name != 'index' }"
    class="
      bg-main-green
      h-screen
      w-screen
      bg-cover
      grid
      expand
      fixed
      overflow-y-auto overflow-x-hidden
    "
  >
    <div
      :class="{ 'col-start-2': router.currentRoute.value.name == 'login' }"
      class="lg:col-start-2 row-start-2"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.expand {
  grid-template-columns: [first] 20vw [line2] auto [col3-start] 20vw [end];
  grid-template-rows: 4rem 16rem 39rem;
  /* grid-template-columns: [first] 26vw [line2] auto [col3-start] 20vw [end]; */
}

.row {
  grid-template-rows: 12rem 16rem 39rem;
}

.unexpand {
  grid-template-columns: [first] 5vw [line2] auto [col3-start] 20vw [end];
}

@media only screen and (max-width: 600px) {
  .expand {
    grid-template-columns: [first] 13vw [line2] auto [col3-start] 24vw [end];
  }
}
@media only screen and (max-width: 500px) {
  .expand {
    grid-template-columns: [first] 8vw [line2] auto [col3-start] 24vw [end];
  }
}
@media only screen and (max-width: 475px) {
  .expand {
    grid-template-columns: [first] 6vw [line2] auto [col3-start] 24vw [end];
  }
}
@media only screen and (max-width: 440px) {
  .expand {
    grid-template-columns: [first] 4vw [line2] auto [col3-start] 24vw [end];
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1280px) {
  .expand {
    grid-template-columns: [first] 10vw [line2] auto [col3-start] 24vw [end];
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1921px) {
  .expand {
    grid-template-columns: [first] 19vw [line2] auto [col3-start] 24vw [end];
  }
}
</style>
