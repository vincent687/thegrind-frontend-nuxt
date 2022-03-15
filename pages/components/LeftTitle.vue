<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Logo from '../../assets/css/icons/thegrind-79 40.svg'

const router = useRouter()
</script>

<template>
  <div class="text-white my-8 text-center">
    <h1 class="flex font-bold text-4xl justify-center">
      Welcome to <Logo class="scale-125 ml-8" />
    </h1>

    <div class="font-thin">
      Login to explore your personalize and unique adventure!
    </div>

    <div class="mt-8">
      <NuxtLink :to="`/login`">
        <button
          class="
            border-2 border-green-light
            rounded-full
            bg-green-light
            w-36
            ml-8
          "
        >
          Login
        </button>
      </NuxtLink>
      <button class="border-2 border-white rounded-full w-36 ml-8">
        Register
      </button>
    </div>
  </div>
</template>
