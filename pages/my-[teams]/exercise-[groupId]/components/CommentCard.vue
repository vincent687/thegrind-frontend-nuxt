<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Video } from '~~/model/lesson'
import ButtonSave from '../../../../assets/css/icons/button-save.svg'

let props = defineProps<{ video: Video }>()
const { video } = toRefs(props)
const router = useRouter()
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value

//   }
</script>

<template>
  <div
    class="
      relative
      bg-white
      lg:w-[40vw]
      xl:w-[40vw]
      2xl:w-48w
      w-[87vw]
      lg:h-[16rem]
      xl:h-[16rem]
      h-[35rem]
      rounded-b-lg
      shadow-md
      mb-[8rem]
    "
  >
    <div class="flex p-[1rem]">
      <p class="font-bold w-[57%] sm:w-[70%] lg:w-[66%] xl:w-[66%] 2xl:w-[80%]">
        {{ video?.data?.name }}
      </p>
      <ButtonSave class="m-auto" />
    </div>

    <hr class="border-t-1 border-t-grayOther-300" />

    <slot></slot>
  </div>
</template>
