<script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { Video } from '~~/model/lesson'
  import IconGo from "../../../../assets/css/icons/icon-go.svg";

  let props =  defineProps<{ video: Video }>()
  const { video } = toRefs(props);
  const router = useRouter()
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value
//   }
</script>

<template>

<div class="flex">
                <img :src="video.thumbnail" alt="thumbnail" class="h-40 w-[40%]" width="288"/>
                <p class="font-bold flex w-48w ml-[8px]">{{ video.name }}</p>
                 <IconGo />
                
            </div>
</template>

