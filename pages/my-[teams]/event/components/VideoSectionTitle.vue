<script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { Video } from '~~/model/lesson'


  let props =  defineProps<{ video: Video }>()
  const { video } = toRefs(props);
  const router = useRouter()

</script>

<template>
        <div class="mt-[3rem] bg-green-default h-12 rounded-t-lg border-b-4">                
            <p class="text-green-light text-center text-3xl">{{ video.name  }} </p>
        </div>
</template>

