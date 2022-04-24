<script setup lang="ts">
import Carousel from '../components/carousel'
import HamburgerContent from '../components/global/HamburgerContent.vue'
import Header from '../components/global/Header.vue'
import { useHamburgerInject } from '@/contexts'
import { useRouter } from 'vue-router'

const { currentHamburger } = useHamburgerInject()
</script>

<template>
  <div
    class="
      bg-main-green
      h-screen
      w-screen
      pb-[30rem]
      bg-cover
      grid
      expand
      fixed
      overflow-y-hidden overflow-x-hidden
    "
  >
    <div
      class="col-start-2 row-start-2 flex h-[60vh] justify-center col--height"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.expand {
  grid-template-columns: [first] 20vw [line2] auto [col3-start] 20vw [end];
  grid-template-rows: 7rem 16rem 39rem;
  /* grid-template-columns: [first] 26vw [line2] auto [col3-start] 20vw [end]; */
}

.unexpand {
  grid-template-columns: [first] 5vw [line2] auto [col3-start] 20vw [end];
}

@media only screen and (max-height: 700px) {
  .col--height {
    grid-row-start: 1;
  }
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
