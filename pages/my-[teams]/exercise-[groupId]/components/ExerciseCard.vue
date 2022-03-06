<script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { Video } from '~~/model/lesson'
 

  let props =  defineProps<{ video: Video }>()
  const { video } = toRefs(props);
  const router = useRouter()
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value


//   }
</script>

<template>

      <div class="relative container m-auto bg-white w-[80%] 2xl:w-[35rem] h-56 rounded-[1.5rem] shadow-md">

            <div class="bg-green-default h-12 rounded-t-[1.5rem] border-b-4">
                          
                <p class="text-green-light text-center">{{ video?.section }} </p>
            </div>
            <div class="flex h-40">
                <img :src="video?.thumbnail" alt="thumbnail" class="max-h-full px-3.5 pt-3.5 max-w-[60%]" width="388"/>
                <p class="font-bold m-auto">{{ video?.name }} </p>
            </div>

      
        </div>
</template>
