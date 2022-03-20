
<script setup lang="ts">
import { ref } from 'vue'
import Logo from '~/assets/css/icons/thegrind-thin-170 87.svg'
import { useRouter } from 'vue-router'
import _ from 'lodash'
import ButtonLogin from '~/assets/css/icons/button-login.svg'
import ButtonReset from '~/assets/css/icons/button-reset.svg'
import IconPw from '~/assets/css/icons/icon-pw.svg'
import { User } from '~~/model/user'

const router = useRouter()
const password = ref('');
const confirmPassword = ref('');
const pattern = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validator = (val) => {
  debugger
  console.log(val)
  if(confirmPassword.value != password.value)
  {
    return false
  }
  else{
    return true;
  }
};


const emit = defineEmits<{
  (e: 'onSubmit', user: User ): void
}>()

const onSubmit = (values) => {
  debugger;
      console.log('submit', values);
      const user = { 
        loginId : '',
        email : '',
        page: 'isFinishPage',
        password: password.value
      }
      emit('onSubmit', user as User)
};

const onReset = (values) => {
  debugger;
      const user = { 
        loginId : '',
        email : '',
        page: 'isLoginIdPage',
        password: ''
      }
      emit('onSubmit', user as User)
};

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
      max-w-fit-content
      lg:w-[80vw]
      xl:w-[70vw]
      2xl:w-[60vw]
    "
  >
    <Logo class="m-auto" />

    <van-form @submit="onSubmit">
    <div class="grid mt-[3rem] w-[70vw] screen-width sm:w-[50vw] lg:w-[23vw]">

      <div class="grid m-auto">
        <div class="pt-2 relative mx-auto text-gray-600 inline-block">
          <button
            type="submit"
            class="absolute left-[3px] top-0 mt-[1rem] mr-4"
          >
            <IconPw class="text-gray-600" />
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
              w-[50vw]
            "
      v-model="password"
      placeholder="Password"
      :rules="[{ pattern, message:  `密碼至少為8位，包括至少大寫字母和特殊字符`}]"
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
            <IconPw class="text-gray-600" />
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
              w-[50vw]
            "
      v-model="confirmPassword"
      placeholder="comfirmPassword"
      :rules="[{ validator, message: `密碼不相符`}]"
    />
          
        </div>
      </div>


    </div>

  

    <div class="flex m-auto w-[25vw] justify-center p-6">
      <ButtonReset @click="onReset" class="mr-[1rem]" />
       <van-button  round block  native-type="submit">
      Complete
    </van-button>
  
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
    width: 50vw
  }
}
</style>


