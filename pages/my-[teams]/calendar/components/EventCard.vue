<script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import { useRouter } from 'vue-router'
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

    <NuxtLink :to="`/my-teams/event/4`"> 
      <div class="relative container grid grid-cols-1  bg-white w-64 h-32 shadow-md">
         
              <div class="flex">
      <IconCalendar /> 02/12/2021  {{event.custom_create_date}}
              <svg class="h-8 w-8 text-black-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
      </svg>
              </div>
              
      
                  <div >
                      <p>{{event.name}}</p>
                  </div>
                  <div>
                      <p>Location: {{event.custom_class_id}}</p>
                  </div>
                  <div>
                    {{event.custom_lession_details}}
                  </div>
            
              </div>
        </NuxtLink>
</template>
