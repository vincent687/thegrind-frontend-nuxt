<template>
  <div>
    <NuxtLink to="/" class="text-blue-400 text-sm">Go Home</NuxtLink>
    {{ note.title }}

    <!-- <div v-if="pending">Fetching note ...</div>
    <div v-else>
      <h1 class="font-bold text-xl mt-4">{{ note.title }}</h1>
      <p>completed: {{ note.completed }}</p>
    </div> -->
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  async setup() {
    const { params } = useRoute()

    const { data: note, pending } = await useAsyncData(
      'data',
      () => $fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`),
      { defer: true, server: false }
    )
    // const { data: note, pending } = await asyncData(
    //   () => $fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`),
    //   { defer: true, server: false }
    // );

    return { note, pending }
  },
}
</script>

<style></style>
