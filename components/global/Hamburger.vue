<script setup lang="ts">
  import { ref } from 'vue'
  import {useHamburgerInject  } from '@/contexts'
  import { useRouter } from 'vue-router'


  const { change: openHamburger, currentHamburger } = useHamburgerInject()

  const router = useRouter()

//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value
//   }
</script>

<template>
  <div class="relative cursor-pointer" @click="openHamburger()">
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
    <div
      :class="{ hidden: !currentHamburger, flex: currentHamburger }"
      class="absolute right-0 bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
    >
        <div class="container grid grid-cols-1 border border-2 rounded-lg bg-white w-12 h-96">
    <div class="container">
         <p>{{$t('hamburger.myTeams')}}</p>
     </div> 
    <div class="container">
        <p>My Profile</p> 
     </div> 
     <div class="container" v-for="subCat in myProfileSubCategory" :key="subCat.name">
         <p class="text-center">{{subCat.name}}</p>
     </div>
     <div class="container">
         <p>Explore</p>
     </div> 

  </div>
      <ul class="py-1 w-full">
        <!-- <li v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`">
          <div
            class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer"
            :class="{
              'text-lg': currentLocale === locale,
              'text-red-500 dark:text-red-500': currentLocale === locale,
            }"
            @click="changeLocale(locale, router)"
          >
            {{ locale }}
          </div>
        </li>
        <li>
          <div
            v-if="currentFontSize != FontSize.header"
            class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer"
            @click="changeFontSize(FontSize.header)"
          >
            Enlarge
          </div>
          <div
            v-else
            class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer"
            @click="changeFontSize(FontSize.normal)"
          >
            Normal
          </div>
        </li> -->
      </ul>
    </div>
  </div>
</template>
