<template>
  <div>
    <h1 class="text-xl font-bold mb-2">Notes</h1>
    <p class="mb-4">built with nuxt 3</p>

    <ul class="border shadow divide-y">
      <li v-for="note of filteredNotes" :key="note.id">
        <NuxtLink :to="`${note.id}`" class="flex flex-col hover:bg-gray-50 p-3">
          <span class="font-bold text-lg">{{ note.title }}</span>
          <span>completed: {{ note.completed }}</span>
        </NuxtLink>
      </li>
    </ul>
    <NuxtLink :to="`/about`"> about </NuxtLink>
    <NuxtLink :to="`/users-admins/1`"> admins </NuxtLink>

    {{ accountState }}
  </div>
</template>

<script lang="ts">
export default {
  layout: 'default',
}
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getUser } from '../api/login'

import { useAccountInject } from '../contexts'

const { state: accountState, load: loadAccount } = useAccountInject()

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
  debugger
  loadAccount('start', '123')
  // await getUser({}).then((res) => {
  //   debugger
  //   console.log('getUser')
  //   console.log(res)
  //   info.value = res.data.data
  // })
})

const filteredNotes = computed(() => {
  return notes.value.slice(0, 5)
})
</script>

<style></style>
