<template>
  <div class="overflow-hidden">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useProvider } from './contexts'
import './assets/css/tailwind.css'

useProvider()
</script>

<style>
body {
  overflow-y: hidden;
}
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
  background: #cccccc;
  border-radius: 10px;
}
</style>
