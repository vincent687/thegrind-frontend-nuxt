<script setup lang="ts">
import { ref } from 'vue'
import Logo from '~/assets/css/icons/thegrind-thin-170 87.svg'
import { useRouter } from 'vue-router'
import _ from 'lodash'
import ButtonNext from '~/assets/css/icons/button-next.svg'
import ButtonReset from '~/assets/css/icons/button-reset.svg'
import IconProfile from '~/assets/css/icons/icon-profile.svg'
import IconMail from '~/assets/css/icons/icon-mail.svg'

const router = useRouter()
</script>

<template>
  <div
    style="max-width: fit-content"
    class="
      relative
      bg-gray
      rounded-[3rem]
      h-[30rem]
      m-7
      opacity-90
      p-8
      w-[77vw]
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
            <IconMail class="text-gray-600" />
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
            placeholder="Email"
          />
        </div>
      </div>
    </div>

    <div class="flex m-auto w-[25vw] justify-center p-6">
      <ButtonReset class="mr-[1rem]" />
      <button class="rounded-full w-[90px] h-[35px] bg-green-light text-white">
        Next
      </button>
    </div>
  </div>
</template>
