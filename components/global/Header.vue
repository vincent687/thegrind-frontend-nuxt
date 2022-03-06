<template>
  <div class="flex items-center h-28 border-b border-b-grayOther-300 ">
    <Hamburger />
    <div class="text-center mx-auto top-1/4 relative">
          <Logo  />
    </div>
    <div class="w-[20vw] text-center">
      John Doe
    </div>
  </div>
</template>


<script setup lang="ts">
  import { ref } from 'vue'
  import { useHamburgerInject } from '@/contexts'
  import { useRouter } from 'vue-router'
  import Hamburger from './Hamburger.vue'
  import Logo from "../../assets/css/icons/thegrind-79 40.svg";

</script>