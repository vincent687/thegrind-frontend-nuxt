<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const props = defineProps<{ content: any }>()


</script>

<template>
  <div class="container bg-gray rounded-[3rem] min-w-[20rem] min-w-fit lg:w-112 h-48 m-7 opacity-90 p-8 ">
    <h1 class="font-bold text-lg">系統消息</h1>
   
    <div class="font-thin">
       {{content}}
    </div>

  </div>
</template>
