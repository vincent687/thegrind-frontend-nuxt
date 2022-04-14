<script setup lang="ts">
import { ref } from 'vue'
import Logo from '~/assets/css/icons/thegrind-thin-170 87.svg'
import { useRouter } from 'vue-router'
import _, { String } from 'lodash'
import ButtonLogin from '~/assets/css/icons/button-login.svg'
import ButtonReset from '~/assets/css/icons/button-reset.svg'
import IconProfile from '~/assets/css/icons/icon-profile.svg'
import IconMail from '~/assets/css/icons/icon-mail.svg'
import { User } from '../../../model/user'

const router = useRouter()
const username = ref('')
const email = ref('')
const name = ref('')
const pattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const emit = defineEmits<{
  (e: 'onSubmit', user: User): void
}>()

const onSubmit = (values) => {
  debugger
  console.log('submit', values)
  const user = {
    loginId: username.value,
    email: email.value,
    page: 'isPasswordPage',
    name: name.value,
  }
  emit('onSubmit', user as User)
}

const onReset = (values) => {
  username.value = ''
  email.value = ''
  name.value = ''
}
</script>

<template>
  <div
    class="
      relative
      bg-gray
      rounded-[3rem]
      h-[35rem]
      m-7
      opacity-90
      p-8
      w-[77vw]
      lg:w-[80vw]
      xl:w-[70vw]
      2xl:w-[60vw]
      max-w-[400px]
    "
  >
    <Logo class="m-auto" />

    <van-form @submit="onSubmit">
      <!-- <div
        class="
          grid
          mt-[3rem]
          w-[62vw]
          screen-width
          sm:w-[50vw]
          lg:w-[23vw]
          m-auto
        "
      > -->
      <div class="grid mt-[3rem] w-[90%] screen-width">
        <div class="grid m-auto">
          <div class="pt-2 relative mx-auto text-gray-600 inline-block">
            <button
              type="submit"
              class="absolute left-[3px] top-0 mt-[1rem] mr-4"
            >
              <IconProfile class="text-gray-600" />
            </button>
            <van-field
              class="
                px-5
              pr-16
              bg-transparent
              border-b-green-light border-b-2
              text-sm
              ml-[1rem]
              sm:w-[30vw]
              lg:w-[18vw]
              2xl:w-[18vw]
              w-[90%]
              "
              v-model="username"
              placeholder="Login ID"
              :rules="[{ required: true, message: '請填寫用户ID' }]"
            />
            <!-- <input
            class="
              h-10
              px-5
              pr-16
              bg-transparent
              border-b-green-light border-b-2
              text-sm
              ml-[1rem]
              sm:w-[30vw]
              lg:w-[18vw]
              2xl:w-[18vw]
              w-[50vw]
            "
            type="search"
            name="search"
            placeholder="Login ID"
          /> -->
          </div>
          <div class="pt-2 relative mx-auto text-gray-600 inline-block">
            <button
              type="submit"
              class="absolute left-[3px] top-0 mt-[1rem] mr-4"
            >
              <IconMail class="text-gray-600" />
            </button>
            <van-field
              class="
                px-5
              pr-16
              bg-transparent
              border-b-green-light border-b-2
              text-sm
              ml-[1rem]
              sm:w-[30vw]
              lg:w-[18vw]
              2xl:w-[18vw]
              w-[90%]
              "
              v-model="email"
              placeholder="Email"
              :rules="[{ pattern, message: '請填寫正確的電郵地址' }]"
            />
          </div>
          <div class="pt-2 relative mx-auto text-gray-600 inline-block">
            <button
              type="submit"
              class="absolute left-[3px] top-0 mt-[1rem] mr-4"
            >
              <IconProfile class="text-gray-600" />
            </button>
            <van-field
              class="
               px-5
              pr-16
              bg-transparent
              border-b-green-light border-b-2
              text-sm
              ml-[1rem]
              sm:w-[30vw]
              lg:w-[18vw]
              2xl:w-[18vw]
              w-[90%]
              "
              v-model="name"
              placeholder="Name"
              :rules="[{ required: true, message: '請填寫名稱' }]"
            />
          </div>
        </div>
      </div>

      <div class="flex m-auto  justify-center p-2 py-6">
        <ButtonReset @click="onReset" class="mr-[1rem]" />
        <van-button round block native-type="submit"> Next </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped>
.van-button--default {
  width: 90px;
  height: 36px;
  background-color: #50d8bb;
  color: white;
  font-weight: bold;
}
.van-cell {
  /* width: 46vw; */
  background-color: transparent;
  /* max-width: 46%; */
}
.max-w-fit-content {
  max-width: fit-content;
}
.form-checkbox:checked {
  background-color: #50d8bb;
}

@media only screen and (min-width: 375px) and (max-width: 1025px) {
  .van-cell {
    /* width: 36vw; */
    max-width: 100%;
  }
}
@media only screen and (min-width: 500px) and (max-width: 640px) {
  .screen-width {
    width: 50vw;
  }
}
</style>
