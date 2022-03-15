<script setup lang="ts">
import { ref } from 'vue'
import Logo from '~/assets/css/icons/thegrind-thin-170 87.svg'
import { useRouter } from 'vue-router'
import _ from 'lodash'
import ButtonLogin from '~/assets/css/icons/button-login.svg'
import ButtonReset from '~/assets/css/icons/button-reset.svg'
import IconProfile from '~/assets/css/icons/icon-profile.svg'
import IconPw from '~/assets/css/icons/icon-pw.svg'

const router = useRouter()
</script>

<template>
  <div
    class="
      relative
      bg-gray
      rounded-[3rem]
      h-[30rem]
      m-7
      opacity-90
      p-8
      w-[77vw]
      max-w-fit-content
      lg:w-[80vw]
      xl:w-[70vw]
      2xl:w-[60vw]
    "
  >
    <Logo class="m-auto" />

    <div class="grid mt-[3rem]">
      <div class="grid w-[23vw] m-auto">
        <div class="pt-2 relative mx-auto text-gray-600 inline-block">
          <button
            type="submit"
            class="absolute left-[3px] top-0 mt-[1rem] mr-4"
          >
            <IconProfile class="text-gray-600" />
          </button>
          <input
            class="
              h-10
              px-5
              pr-16
              bg-transparent
              border-b-green-light border-b-2
              text-sm
              ml-[1rem]
            "
            type="search"
            name="search"
            placeholder="Login ID"
          />
        </div>
        <div class="pt-2 relative mx-auto text-gray-600 inline-block">
          <button
            type="submit"
            class="absolute left-[3px] top-0 mt-[1rem] mr-4"
          >
            <IconPw class="text-gray-600" />
          </button>
          <input
            class="
              h-10
              px-5
              pr-16
              bg-transparent
              border-b-green-light border-b-2
              text-sm
              ml-[1rem]
            "
            type="search"
            name="search"
            placeholder="Password"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-center p-3">
      <input type="checkbox" class="form-checkbox" />
      <div class="mr-[3vw] text-sm text-grayOther-400">Remember me</div>
      <NuxtLink :to="`/about`" class="text-sm">
        <p class="underline underline-offset-1 text-grayOther-400">
          Forget password
        </p>
      </NuxtLink>
    </div>

    <div class="flex m-auto w-[25vw] justify-center p-6">
      <ButtonReset class="mr-[1rem]" />
      <ButtonLogin />
    </div>

    <div class="grid absolute text-center w-[80%] bottom-[1rem] text-sm">
      <div class="text-grayOther-400">New to the grind?</div>
      <NuxtLink :to="`/register`">
        <p class="underline underline-offset-1 font-bold">Register here</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.max-w-fit-content {
  max-width: fit-content;
}
.form-checkbox:checked {
  background-color: #50d8bb;
}
</style>
