<script setup lang="ts">
  import { ref } from 'vue'
  import { useHamburgerInject } from '@/contexts'
  import { useRouter } from 'vue-router'
  import { Popup } from 'vant';
 

  const { change: openHamburger, currentHamburger } = useHamburgerInject()


  const router = useRouter()




</script>

<template>
  <div class="relative cursor-pointer w-[20vw] left-[2%]" @click="openHamburger">
    <svg
      aria-hidden="true"
      class="text-black dark:text-white"
      data-icon="bars"
      data-prefix="fas"
      focusable="false"
      height="24"
      role="img"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        fill="currentColor"
      />
    </svg>
   
  </div>

</template>
