<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()



</script>

<template>
  <div class="container bg-gray rounded-[10px]  h-96 m-7 opacity-9">
    <h1 class="font-bold text-lg ml-4">Contact Us</h1>
      
    <div class="grid">
      <div class="flex">
         <div class="grid w-9/20 ml-4">
          <label>Name </label>
          <input class="rounded-lg" >
        </div>
        <div class="grid w-9/20 ml-4">
            <label>Email </label>
            <input class="rounded-lg" >
        </div>
      </div>
     
    
     <div class="ml-4 grid w-4/5">
        <label>Leave a Message </label>
        <textarea class="rounded-lg" rows="5"  >
          </textarea>
     </div>
    </div>
     

    

    <button class="border-2 border-black rounded-full w-36 ml-8"> Submit </button>

   
  </div>
</template>
