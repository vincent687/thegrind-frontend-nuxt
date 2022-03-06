<script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { Company } from '~~/model/company';
  import { toFullDate } from "~~/utils/global" 
  import AvatarRound from "../../../assets/css/icons/avatar-round-45.svg";

  defineProps<{ company: Company }>()



  const router = useRouter()
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value
//   }
</script>

<template>
      <div class="relative  grid grid-cols-1 rounded-[25px] bg-white w-[96%] h-[30rem] shadow-md p-4 overflow-y-auto">
          <div>
                <!-- {{course?.name}} -->
            <div class="font-bold text-green-light p-3.5 ">{{company.name}}</div>
            <div class="p-4 h-32 overflow-y-auto">
              <ul class="list-[unset]">
                <li>
                  StartDate: {{toFullDate(company?.companyInfo.create_date)}}
                </li>
                <li v-if="company?.companyInfo.comment">
                  {{company?.companyInfo.comment}}
                </li>
              </ul>
           
            </div>
            <hr class="border-t-1 border-t-grayOther-300">
            <div class="font-bold p-3.5">
              Coaches:
            </div>
            <div>
            
                <div v-for="employee in company?.employees" :key="employee.id" class="flex my-5">
                    <img  class="rounded-[50%] ml-2.5 w-12 h-[5rem] w-[5rem]"  alt="thumbnail" :src="employee?.user.partner.attachment.url" />
                    <div class="grid">
                       <p class="m-auto ml-4">{{employee?.user.partner.name}}</p>
                       <p>{{employee?.user.partner.comment}}</p>
                    </div>
                  
                </div>
                
              <!-- <img class="rounded-[50%] ml-2.5 w-12 border-black border-solid border-2" :src="company?.employee?.attachment.url" /> -->
              <!-- <AvatarRound class="ml-2.5"></AvatarRound>
              <AvatarRound class="ml-2.5"></AvatarRound>
              <AvatarRound class="ml-2.5"></AvatarRound> -->
            </div> 
  
            <!-- <div class="flex absolute bottom-[2rem] left-1/2 -translate-x-2/4 w-full">
                <NuxtLink :to="`/my-teams/video/${course?.id}`" class="w-[30%] m-2.5"><button class="border-2 border-black rounded-full h-12 w-full  font-bold" > Video </button></NuxtLink> 
                 <NuxtLink :to="`/my-teams/calendar/${course?.id}`" class="w-[30%] m-2.5"><button class="border-2 border-black rounded-full h-12 w-full font-bold" > Calendar </button></NuxtLink> 
                  <NuxtLink :to="`/my-teams/video/${course?.id}`" class="w-[30%] m-2.5"><button class="border-2 border-black rounded-full h-12 w-full  font-bold" > Payment </button></NuxtLink> 

            </div> -->
          </div> 
            
        </div>

</template>
