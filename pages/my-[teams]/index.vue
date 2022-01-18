<template>
  <div class="container grid grid-cols-1 border border-2 rounded-lg ">
     <div class="container">
            My Team
     </div>

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
