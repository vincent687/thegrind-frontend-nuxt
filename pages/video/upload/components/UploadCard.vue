<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import DropdownButton from '../../../../components/global/DropdownButton.vue'
  const router = useRouter()



</script>

<template>
  <div class="container bg-white rounded-[10px]  h-60 m-7 p-8 ">      
    <div class="grid mb-4">
      <div class="flex">
         <div class="grid w-9/20 ml-4">
          <label> Video Title </label>
          <input class="rounded-lg border border-gray-100 " >
        </div>
        <div class="grid w-9/20 ml-4">
            <label>Class </label>
            <DropdownButton></DropdownButton>
        </div>
      </div>
     
    
     <div class="ml-4 grid w-4/5">
        <label>Video Link </label>
        <input class="rounded-lg border border-gray-100" >
     </div>
     <div class="ml-4">
         <label>Choose File </label>
         <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg">
     </div>
    </div>
     

    
    <button class="border-2 border-green-light rounded-full bg-green-light ml-4  w-[7rem] text-white"> Upload </button>

   
  </div>
</template>
