<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()



</script>

<template>
  <div class="bg-gray rounded-[3rem]  h-96 m-7 opacity-90 p-8">
    <h1 class="font-bold text-lg ml-4">Contact Us</h1>
      
    <div class="grid">
      <div class="flex">
         <div class="grid w-9/20 ml-4">
          <label class="text-grayOther-400" >Name </label>
          <input class="w-[86%] rounded-lg lg:w-full" >
        </div>
        <div class="grid w-9/20 ml-4">
            <label class="text-grayOther-400">Email </label>
            <input class=" w-[86%] rounded-lg lg:w-full" >
        </div>
      </div>
     
    
     <div class="m-4 grid w-[88%] lg:w-[94%]">
        <label class="text-grayOther-400">Leave a Message </label>
        <textarea class="rounded-lg" rows="5"  >
          </textarea>
     </div>
    </div>
     

    

    <button class="border-2 border-black rounded-full w-36 m-8"> Submit </button>

   
  </div>
</template>
