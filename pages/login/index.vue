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



<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import LoginCard from './components/LoginCard.vue'
import md5 from 'blueimp-md5'
import { useRouter } from 'vue-router'
import { Notify } from 'vant'
import { User } from '~~/model/user'
import { login } from '~~/api/login'
import { sessionGet } from '~~/utils/global'

definePageMeta({
layout: "login",
});

// const {data: api} = await useFetch("/api/company/getCompanys?page=1&pageSize=4");
// const info = ref(api)

const router = useRouter()

const user  = ref({} as User)

const submitLogin = (value) => {
    user.value = {...value, password:  md5(value.password) }
    login(
      {...user.value}
    ).then((data) => {
      if(data)
      {
        if(data.status!= 200)
        {
          Notify({ type: 'danger', message: data.data.message });
        }
        else{
          sessionStorage.setItem('user',JSON.stringify(data.data))
          sessionStorage.setItem(
            'user-token',
            JSON.stringify(data.data.access_token)
          )
          const event = sessionGet('event-invite');
          if(event){
            router.push(`/event-invitation?opts=${event}`)
          }
          else{
            router.push('/my-teams')
          }
      
        }
      }
    }); 
  
}
</script>