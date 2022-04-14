<script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { Video } from '~~/model/lesson'
  import { File } from '~~/model/file'
  import IconGo from "../../../assets/css/icons/icon-go.svg";
  import IconEdit from "../../../assets/css/icons/icon-edit.svg";


  let props =  defineProps<{ video: File }>()
  // let props =  defineProps<{ video: Video }>()
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

                <video class="max-h-[40%] sm:max-h-[70%] lg:max-h-[70%] 2xl:max-h-full   max-w-[46%] 2xl:max-w-full p-[0.875rem]  2xl:p-[3.875rem] m-auto" width="388"  controls v-if="!video.thumbnail">
                  <source :src="video.filePath" type="video/mp4">
                Your browser does not support the video tag.
                </video>
                <img v-else :src="video.thumbnail" alt="thumbnail" class="max-h-[40%] sm:max-h-[70%] lg:max-h-[70%] 2xl:max-h-full   max-w-[46%] 2xl:max-w-full p-[0.875rem]  2xl:p-[3.875rem] m-auto" width="388"/>
                <div class="w-[28vw] 2xl:w-[58vw] m-auto">
                    <p class="font-bold">{{ video.name }} </p>
               
                    <div class="w-[90%] truncate ">{{ video.description }}  </div>
                </div>
                <NuxtLink :to="`/video/edit/${video.id}`" class="mt-auto mb-auto 2xl:m-auto">  <IconEdit /> </NuxtLink>
               <IconGo class="mt-auto mb-auto 2xl:m-auto" />
            </div>

      
      
        </div>
</template>
