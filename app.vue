<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useProvider } from './contexts'
import './assets/css/tailwind.css'

useProvider()


</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #CCCCCC; 
  border-radius: 10px;
}

</style>