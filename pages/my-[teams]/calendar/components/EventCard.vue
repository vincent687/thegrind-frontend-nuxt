<script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import { useRouter } from 'vue-router'
    import { toFullDate } from "~~/utils/global" 
  import IconCalendar from "../../../../assets/css/icons/icon-calendar.svg";
  import { Lesson } from '~~/model/lesson';

  let props = defineProps<{ event: Lesson}>()
  const { event } = toRefs(props);
  const router = useRouter()
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value
//   }
</script>

<template>
   <div>
     {{event}}
      <NuxtLink :to="`/my-teams/event/${event.id}`"> 
      <div class="relative  grid grid-cols-1 rounded-[2.5rem] bg-white  h-32 shadow-md  mt-16 p-8">
         
              <div class="flex">
                 <IconCalendar /> 
                <!-- <div class="w-[15vw]"> -->
                 <div class="w-[68vw] 2xl:w-[15vw]">
                  {{toFullDate (event.custom_create_date)}}
                </div>
              <svg class="h-8 w-8 text-black-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
      </svg>
              </div>
              
      
                   <div >
                      <p class="font-bold">{{event.name}}</p>
                  </div>
                  <div>
                      <p>Location: {{event.custom_class_id}}</p>
                  </div>
            
              </div>
        </NuxtLink>
   </div>
   
</template>
