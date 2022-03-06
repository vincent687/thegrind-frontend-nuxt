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
    <div class="relative  grid grid-cols-1 rounded-[25px] bg-green-default w-[96%] 2xl:h-40 h-[8rem] shadow-md p-8  mb-[3rem]">
        <div class="text-green-light">
            Notice Board:
        </div>
        <div class="text-white">
             {{course?.name}}
        </div>
         
    </div>

</template>
