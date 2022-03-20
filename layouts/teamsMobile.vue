<script setup lang="ts">
import Carousel from '../components/carousel'
import HamburgerContentMobile from '../components/global/HamburgerContentMobile.vue'
import Header from '../components/global/Header.vue'
import { useHamburgerInject } from '@/contexts'

const { change: openHamburger, currentHamburger } = useHamburgerInject()

const closePopUp = () => {
  debugger
  openHamburger()
}

const themeVars = {
  popupBackgroundColor: '#092231',
}
</script>

<script lang="ts">
export default {
  name: 'teamsMobile',
}
</script>

<template>
  <div class="bg-gray overflow-y-auto overflow-x-hidden">
    <Header></Header>
    <van-config-provider :theme-vars="themeVars">
      <van-popup
        v-model:show="currentHamburger"
        @click-overlay="closePopUp"
        position="top"
        :style="{ height: '100%' }"
        ><HamburgerContentMobile @close="closePopUp"></HamburgerContentMobile>
      </van-popup>
    </van-config-provider>
    <div class="grid expand w-screen h-screen">
      <div class="col-start-2">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.van-popup {
  background-image: url('~/assets/css/icons/background.png');
  background-color: black !important;
}
.expand {
  grid-template-columns: [first] 4vw [line2] auto [end];
  /* grid-template-columns: [first] 16vw [line2] auto [col3-start] 20vw [end];  */
}
.unexpand {
  grid-template-columns: [first] 5vw [line2] auto [col3-start] 20vw [end];
}
@media only screen and (max-width: 475px) {
  .expand {
    grid-template-columns: [first] 5vw [line2] auto [col3-start] 24vw [end];
  }
}
@media only screen and (min-width: 475px) and (max-width: 1024px) {
  .expand {
    grid-template-columns: [first] 6vw [line2] auto [col3-start] 24vw [end];
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1280px) {
  .expand {
    grid-template-columns: [first] 8vw [line2] auto [end];
  }
}
/* @media only screen and (min-width: 1280px) and (max-width: 1300px) {
  .expand {
    grid-template-columns: [first] 4vw [line2] auto [end];
  } 
} */
</style>
