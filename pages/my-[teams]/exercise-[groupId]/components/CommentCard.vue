<script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { Video } from '~~/model/lesson'
  import ButtonSave from "../../../../assets/css/icons/button-save.svg";

  let props =  defineProps<{ video: Video }>()
  const { video } = toRefs(props);
  const router = useRouter()
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value


//   }
</script>

<template>

    <div class="relative   bg-white 2xl:w-48w w-[80vw] h-[46rem] rounded-b-lg shadow-md">
        <div class="flex p-8">
           <p class="font-bold w-[45%]  sm:w-[70%] lg:w-[80%] 2xl:w-[80%]">{{ video?.data?.name }} </p>
           <ButtonSave /> 
        </div>
        
        <hr class="border-t-1 border-t-grayOther-300"> 

        <slot></slot>

      
    </div>
</template>
