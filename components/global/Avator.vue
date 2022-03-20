<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import IconProfile from '~/assets/css/icons/icon-profile.svg';
  
  const router = useRouter()
  const isShowMenu = ref(false)
 
  const showMenu = () => {
     isShowMenu.value = !isShowMenu.value
  }
</script>

<template>
<div class="grid relative">
    <div @click="showMenu" class="flex">
        <IconProfile /><slot></slot>
    </div>

<!-- Dropdown menu -->
  <div  v-if="isShowMenu" id="dropdown" class="z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-[41px]">
      <ul class="py-1" aria-labelledby="dropdownButton">
        <li>
          <NuxtLink :to="`/login`" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"> Sign out </NuxtLink>
        </li>
      </ul>
  </div>
</div>
  
</template>
