<template>
    <div
    class="
      col-start-2
      w-[90vw]
      lg:flex
      items-center
      justify-center
      lg:w-[80vw]
      xl:w-[70vw]
      2xl:w-[60vw]
    "
  >
    <LoginCard @onSubmit="submitLogin"></LoginCard>
  </div>
 
</template>

<script lang="ts">
export default {
  layout: 'login',
  transition: 'fade'
}
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import LoginCard from './components/LoginCard.vue'
import md5 from 'blueimp-md5'
import { useRouter } from 'vue-router'
import { Notify } from 'vant'
import { User } from '~~/model/user'
import { login } from '~~/api/login'


const router = useRouter()


const user  = ref({} as User)

const submitLogin = (value) => {
    debugger;
    user.value = {...value, password:  md5(value.password) }
    login(
      {...user.value}
    ).then((data) => {

      debugger
      if(data)
      {
        if(data.status!= 200)
        {
          Notify({ type: 'danger', message: data.data.message });
        }
        else{
          sessionStorage.setItem('user',JSON.stringify(data.data))
          router.push('/my-teams')
        }
      }
    }); 
  

}


onMounted(() => {
  // await getUser({}).then((res) => {
  //   debugger
  //   console.log('getUser')
  //   console.log(res)
  //   info.value = res.data.data
  // })
})
</script>

<style></style>
