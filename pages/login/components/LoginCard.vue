<script setup lang="ts">
import { ref } from 'vue'
import Logo from '~/assets/css/icons/thegrind-thin-170 87.svg'
import { useRouter } from 'vue-router'
import _ from 'lodash'
import ButtonLogin from '~/assets/css/icons/button-login.svg'
import ButtonReset from '~/assets/css/icons/button-reset.svg'
import IconProfile from '~/assets/css/icons/icon-profile.svg'
import IconPw from '~/assets/css/icons/icon-pw.svg'
import PwEye from '~/assets/css/icons/password-eye.svg'
import { User } from '~~/model/user'

const router = useRouter()
const username = ref('')
const password = ref('')

const emit = defineEmits<{
  (e: 'onSubmit', user: User): void
}>()

const onSubmit = (values) => {
  debugger
  console.log('submit', values)
  const user = {
    loginId: username.value,
    email: '',
    page: '',
    password: password.value,
  }
  emit('onSubmit', user as User)
}

const onReset = (values) => {
  username.value = ''
  password.value = ''
}

const showPassword = () => {
  debugger
  var x = <HTMLInputElement>document.getElementById('passwordInput')
  if (x.type === 'password') {
    x.type = 'text'
  } else {
    x.type = 'password'
  }
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
    <client-only>
       <van-form @submit="onSubmit">
      <!-- <div class="grid mt-[3rem] w-[90%] screen-width sm:w-[50vw] lg:w-[23vw]"> -->
      <div class="grid mt-[3rem] w-[90%] screen-width" style="border: none">
        <div class="grid m-auto">
          <div class="pt-2 relative mx-auto text-gray-600 inline-block">
            <button
              type="submit"
              class="absolute left-[3px] top-0 mt-[1rem] mr-4"
            >
              <IconProfile class="text-gray-600" />
            </button>

            <van-field
              style="
                padding-right: 2.5rem !important;
                text-decoration: none !important;
                outline: none;
              "
              class="
                px-5
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
              autocomplete="off"
              autocorrect="off"
              placeholder="Login ID"
              :rules="[{ required: true, message: '請填寫用户ID' }]"
            />
          </div>

          <div class="pt-2 relative mx-auto text-gray-600 inline-block">
            <button
              type="submit"
              class="absolute left-[3px] top-0 mt-[1rem] mr-4"
            >
              <IconPw class="text-gray-600" />
            </button>

            <van-field
              style="text-decoration: none !important; outline: none"
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
              id="passwordInput"
              type="password"
              autocomplete="off"
              autocorrect="off"
              right-icon="eye"
              @click-right-icon.stop="showPassword"
              v-model="password"
              placeholder="Password"
              :rules="[{ required: true, message: '請填寫密碼' }]"
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

      <div class="flex m-auto justify-center p-2 py-6">
        <ButtonReset @click="onReset" class="mr-[1rem]" />
        <button native-type="submit"><ButtonLogin /></button>
       
      </div>
    </van-form>
    </client-only>
   

    <div class="grid absolute text-center w-[80%] bottom-[1rem] text-sm">
      <div class="text-grayOther-400">New to the grind?</div>
      <NuxtLink :to="`/register`">
        <p class="underline underline-offset-1 font-bold">Register here</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
:focus {
  outline: none;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
a:link {
  text-decoration: none;
  border-bottom: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
input {
  outline: none;
  border-radius: 0;
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}
.van-field__control {
  border-bottom: none !important;
  text-decoration: none !important;
  outline: none !important;
  &:focus {
    outline: none;
  }
}
.van-field__control::-webkit-input-placeholder {
  outline: none;
}

.van-field__control:focus::-webkit-input-placeholder {
  outline: none;
}

.van-button--default {
  border: none;
  background: transparent;
  padding: 0px;
  height: auto;
}
.van-cell {
  background-color: transparent;
}
.max-w-fit-content {
  max-width: fit-content;
}
.form-checkbox:checked {
  background-color: #50d8bb;
}

@media only screen and (min-width: 500px) and (max-width: 640px) {
  .screen-width {
    width: 50vw;
  }
}
</style>
