<script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { Tutor } from '~~/model/course'


  defineProps<{ course: Tutor }>()



  const router = useRouter()
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value
//   }
</script>

<template>
      <div class="relative container grid grid-cols-1 rounded-[25px] bg-white w-112 h-112 shadow-md">
        {{course}}
          {{course?.name}}
          StartDate: <p>{{course?.custom_start_date}}</p>
          EndDate: <p>{{course?.custom_end_date}}</p>
          Class Description:
            <div class="absolute h-3/6 top-2/4">
                <p>{{course?.course?.description}}</p>
            </div>
            <div class="flex absolute bottom-[2rem] left-1/2 -translate-x-2/4">
                <button class="border-2 border-black rounded-full h-12 w-28 ml-2.5 font-bold" >Video</button>
                <button class="border-2 border-black rounded-full h-12 w-28 ml-2.5 font-bold"> <NuxtLink :to="`/my-teams/calendar/${course?.id}`"> Calendar </NuxtLink></button> 
                <button class="border-2 border-black rounded-full h-12 w-28 ml-2.5 font-bold">Payment</button>
            </div>
            
        </div>

</template>
