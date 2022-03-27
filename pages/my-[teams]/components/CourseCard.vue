<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Tutor } from '~~/model/course'
import IconCalendar from '../../../assets/css/icons/icon-calendar-1.svg'
import IconGroup from '../../../assets/css/icons/icon-group.svg'
import { toFullDate } from '~~/utils/global'

defineProps<{ course: Tutor }>()

defineEmits<{
  (e: 'click', course: Tutor): void
}>()

const router = useRouter()
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value
//   }
</script>

<template>
  <!-- {{course}} -->
  <div
    class="
      relative
      container
      grid grid-cols-1
      rounded-[25px]
      bg-white
      w-[16rem]
      h-[37vh]
      2xl:w-112 2xl:h-112
      shadow-md
    "
    @click="$emit('click', course)"
  >
    <div class="absolute h-3/6 top-0 w-[16rem] 2xl:w-112">
      <img
        class="w-full rounded-t-[25px] object-cover mb-3"
        alt="abc"
        :src="course?.course?.attachment.url"
      />
      <!-- <img
                        class="w-full rounded-t-[25px]  object-cover mb-3"
                        alt="abc"
                        src='https://jekyll-atlantic.netlify.app/assets/images/unsplash-CTivHyiTbFw-640x360.jpeg'
                      /> -->
    </div>

    <div class="absolute h-3/6 2xl:top-2/3 left-4 top-[57%]">
      <p class="font-bold my-2 text-sm 2xl:text-lg">{{ course?.name }}</p>

      <div class="container flex">
        <div
          v-for="tag in course?.course?.channelChannelTags"
          :key="tag || ''"
          class="text-sm text-gray-600 mb-1 my-1"
        >
          <div
            class="
              mr-1.5
              text-xs
              inline-flex
              items-center
              font-bold
              leading-sm
              uppercase
              px-3
              py-1
              rounded-full
              bg-green-200
              text-black-700
            "
          >
            {{ tag.tag.name }}
          </div>
        </div>
      </div>
      <div class="flex text-xs 2xl:my-2">
        <IconGroup />
        {{ course?.employee?.company?.name }}
      </div>
      <div class="flex text-xs 2xl:my-2">
        <IconCalendar />
        {{ toFullDate(course?.custom_start_date) }}-
        {{ toFullDate(course?.custom_end_date) }}
      </div>
    </div>
  </div>
</template>
