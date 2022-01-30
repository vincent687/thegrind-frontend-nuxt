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
