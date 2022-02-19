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

      <div class="relative container  bg-white w-[28rem] h-56 rounded-lg shadow-md">

            <div class="bg-green-default h-12 rounded-t-lg border-b-4">
                          
                <p class="text-green-light text-center">{{ video?.name }} </p>
            </div>
            <div class="flex h-32">
                <img :src="video?.thumbnail" alt="thumbnail" class="max-h-full" width="388"/>
                <p>{{ video?.name }} </p>
            </div>

      
        </div>
</template>
