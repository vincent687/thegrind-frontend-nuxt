<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Logo from "../../assets/css/icons/thegrind-79 40.svg";
 

  const router = useRouter()



</script>

<template>
  <div class="container text-white w-72 ">
    <h1 class="flex font-bold text-lg">Welocme to   <Logo /></h1>
   
    <div class="font-thin">
        Login to explore your personalize and unique adventure!
    </div>

    <div>
        <button class="border-2 border-green-light rounded-full bg-green-light"> Login </button>
        <button class="border-2 border-white rounded-full"> Register </button>
    </div>
   
  </div>
</template>
