<template>
  <div
    class="
      col-start-2
      w-[50vw]
      lg:flex
      items-center
      justify-center
      lg:w-[80vw]
      xl:w-[70vw]
      2xl:w-[60vw]
    "
  >
    <RegisterCard></RegisterCard>
  </div>
</template>

<script lang="ts">
export default {
  layout: 'default',
}
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import RegisterCard from './components/RegisterCard.vue'

const { data: notes } = await useAsyncData('data', () =>
  $fetch('https://jsonplaceholder.typicode.com/todos')
)
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
