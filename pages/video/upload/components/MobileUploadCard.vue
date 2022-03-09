<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import DropdownButton from '../../../../components/global/DropdownButton.vue'
  const router = useRouter()



</script>

<template>
  <div class="mt-[2rem]">      
    <div class="grid mb-4">
        <label class="text-grayOther-400"> Video Title </label>
        <input class="rounded-[2rem] border border-grayOther-400 " >
        <label class="text-grayOther-400">Class </label>
        <DropdownButton></DropdownButton>
        <label class="text-grayOther-400">Video Link </label>
        <input class="rounded-[2rem] border border-grayOther-400" >
        <label class="text-grayOther-400">Choose File </label>
        <input type="file"
            id="avatar" name="avatar"
            accept="image/png, image/jpeg">
    </div>
    <button class="border-2 border-green-light rounded-full bg-green-light ml-4  w-[7rem] text-white"> Upload </button>


   
  </div>
</template>
