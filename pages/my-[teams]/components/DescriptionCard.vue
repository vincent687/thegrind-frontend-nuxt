<script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { Tutor } from '~~/model/course'
  import { toFullDate } from "~~/utils/global" 
    import AvatarRound from "../../../assets/css/icons/avatar-round-45.svg";

  defineProps<{ course: Tutor }>()



  const router = useRouter()
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value
//   }
</script>

<template>
      <div class="relative  grid grid-cols-1 rounded-[25px] bg-white w-[96%] h-112 shadow-md p-4">
        <!-- {{course}} -->
  
          <div>
                {{course?.name}}
            <div class="font-bold">Class Description:</div>
            <div class="p-4 h-32 overflow-y-auto">
              <p>StartDate: {{toFullDate(course?.custom_start_date)}}</p>
              <p>EndDate: {{toFullDate(course?.custom_end_date)}}</p>
              <div>
                  <p>{{course?.course?.description}}</p>
              </div>
            </div>
            <hr class="border-t-1 border-t-grayOther-300">
            <div class="font-bold">
              Coach Icons:
            </div>
            <div class="flex">
              <AvatarRound class="ml-2.5"></AvatarRound>
              <AvatarRound class="ml-2.5"></AvatarRound>
              <AvatarRound class="ml-2.5"></AvatarRound>
            </div>
  
            <div class="flex absolute bottom-[2rem] left-1/2 -translate-x-2/4">
                <button class="border-2 border-black rounded-full h-12 w-28 ml-2.5 font-bold" ><NuxtLink :to="`/my-teams/video/${course?.id}`"> Video </NuxtLink> </button>
                <button class="border-2 border-black rounded-full h-12 w-28 ml-2.5 font-bold"> <NuxtLink :to="`/my-teams/calendar/${course?.id}`"> Calendar </NuxtLink></button> 
                <button class="border-2 border-black rounded-full h-12 w-28 ml-2.5 font-bold">Payment</button>
            </div>
          </div>
            
        </div>

</template>
