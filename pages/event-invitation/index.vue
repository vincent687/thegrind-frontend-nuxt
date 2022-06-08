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
import InvitationCard from './components/InvitationCard.vue'

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


  <div class=" z-10 inset-0 overflow-y-auto">
    <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-[30rem] sm:w-full sm:p-6">
        <div>
          <InvitationCard></InvitationCard>
        </div>
      </div>
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
