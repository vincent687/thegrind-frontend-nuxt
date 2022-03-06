<script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { Video } from '~~/model/lesson'
  import IconGo from "../../../assets/css/icons/icon-go.svg";
  import IconEdit from "../../../assets/css/icons/icon-edit.svg";



  let props =  defineProps<{ video: Video }>()
  const { video } = toRefs(props);
  const router = useRouter()

 
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value
//   }
</script>

<template>
      <div class="relative grid grid-cols-1  h-60 ">


            <div class="flex">
                <img :src="video.thumbnail" alt="thumbnail" class="max-h-full  p-[3.875rem]" width="388"/>
                <div class="w-[58vw] m-auto">
                    <p class="font-bold">{{ video.name }} </p>
                    <div>{{ video.description }}  </div>
                </div>
                <NuxtLink :to="`/video/edit/${video.id}`" class="m-auto">  <IconEdit /> </NuxtLink>
               <IconGo class="m-auto" />
            </div>

      
      
        </div>
</template>
