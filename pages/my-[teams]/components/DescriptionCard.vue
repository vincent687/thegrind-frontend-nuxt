<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Tutor } from '~~/model/course'
import { toFullDate } from '~~/utils/global'
import AvatarRound from '../../../assets/css/icons/avatar-round-45.svg'

defineProps<{ course: Tutor }>()

const router = useRouter()
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value
//   }
</script>

<template>

  <div
    class="
      layout__height
      relative
      grid grid-cols-1
      rounded-[25px]
      bg-white
      w-[96%]
      h-[45vh]
      2xl:h-112
      shadow-md
      p-4
      mb-[10rem]
    "
  >


    <div>
      <!-- {{course?.name}} -->
      <div class="font-bold">Class Description:</div>
      <div class="p-[2rem] h-32 overflow-y-auto">
        <ul class="list-[unset]">
          <li>StartDate: {{ toFullDate(course?.start_date) }}</li>
          <li>EndDate: {{ toFullDate(course?.end_date) }}</li>
          <li>
            {{ course?.description }}
          </li>
        </ul>
        <!-- <p>StartDate: {{toFullDate(course?.custom_start_date)}}</p>
              <p>EndDate: {{toFullDate(course?.custom_end_date)}}</p>
              <div>
                  <p>{{course?.course?.description}}</p>
              </div> -->
      </div>
      <hr class="border-t-1 border-t-grayOther-300" />
      <div class="font-bold">Coach Icons:</div>
      <div class="flex" v-if="course.tutorsProfiles">
        <img
          v-for="profile in course.tutorsProfiles"
          class="rounded-[50%] ml-2.5 w-12 border-black border-solid border-2"
          :src="profile"
        />
        <AvatarRound class="ml-2.5"></AvatarRound>
        <AvatarRound class="ml-2.5"></AvatarRound>
        <AvatarRound class="ml-2.5"></AvatarRound>
      </div>

      <div class="flex absolute bottom-[2rem] left-1/2 -translate-x-2/4 w-full">
  
        <NuxtLink :to="`/my-teams/video/${course?.id}`" class="w-[30%] m-2.5"
          ><button
            class="border-2 border-black rounded-full h-12 w-full font-bold"
          >
            Video
          </button></NuxtLink
        >
        <NuxtLink :to="`/my-teams/calendar/${course?.id}`" class="w-[30%] m-2.5"
          ><button
            class="border-2 border-black rounded-full h-12 w-full font-bold"
          >
            Calendar
          </button></NuxtLink
        >
        <NuxtLink :to="`/my-teams/video/${course?.id}`" class="w-[30%] m-2.5"
          ><button
            class="border-2 border-black rounded-full h-12 w-full font-bold"
          >
            Payment
          </button></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style>
@media only screen and (min-width: 375px) and (max-width:414px) {
  .layout__height {
    height: 54vh
  }
}
</style>