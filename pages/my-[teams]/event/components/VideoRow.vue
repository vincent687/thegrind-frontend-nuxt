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
                <img :src="video.thumbnail" alt="thumbnail" class="h-40 p-3.5" width="200"/>
                <div class="w-[60%] m-auto">
                  <p class="font-bold flex">{{ video.name }}</p>
                </div>
           
                 <IconGo class="m-auto" />
                
      </div>
</template>

