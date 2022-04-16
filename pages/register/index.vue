<template>
 <div>
   123
 </div>
  <!-- <div
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
    <RegisterLoginIdCard
      @onSubmit="changePage"
      v-if="currentPage == 'isLoginIdPage'"
    ></RegisterLoginIdCard>
    <RegisterPasswordCard
      @onSubmit="submitReg"
      v-if="currentPage == 'isPasswordPage'"
    ></RegisterPasswordCard>
  </div> -->
</template>

<script lang="ts">
export default {
  layout: 'login',
}
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { register } from '~/api/login'
import RegisterLoginIdCard from './components/RegisterLoginIdCard.vue'
import RegisterPasswordCard from './components/RegisterPasswordCard.vue'
import { User } from '~~/model/user'
import md5 from 'blueimp-md5'
import { useRouter } from 'vue-router'
import { Notify } from 'vant'

const router = useRouter()


const currentPage = computed(() => {
  debugger
  return page.value
})

const page = ref('isLoginIdPage')
const user = ref({} as User)

const changePage = (value) => {
  debugger
  user.value = { ...value, password: '' }
  page.value = value.page
}

const submitReg = (value) => {
  debugger
  if (value.page == 'isLoginIdPage') {
    page.value = 'isLoginIdPage'
  } else {
    user.value.password = md5(value.password)
    register({ ...user.value }).then((data) => {
      debugger
      if (data) {
        if (data.status != 201) {
          Notify({ type: 'danger', message: data.data.message })
        } else {
          sessionStorage.setItem('user', JSON.stringify(data.data))
          Notify({ type: 'success', message: '成功申請' })
          router.push('/my-teams')
        }
      }
    })
  }
}
//let info = ref({})
// await getUser({}).then((res) => {
//   debugger
//   console.log('getUser')
//   console.log(res)
//   info.value = res.data
// })

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
