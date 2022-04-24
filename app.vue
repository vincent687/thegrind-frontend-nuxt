<template>
  <!-- <div style="height: 100vh;
    overflow-y: auto;" class="overflow-hidden">
    <NuxtPage />
  </div> -->
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useProvider } from './contexts'

useProvider()
</script>

<style>
body {
  overflow: hidden;
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
