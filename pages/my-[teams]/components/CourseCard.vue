<script setup lang="ts">
  import { defineProps,defineEmits, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { Tutor } from '~~/model/course'


  defineProps<{ course: Tutor }>()


  defineEmits<{
    (e: 'click', course: Tutor): void
  }>()

  const router = useRouter()
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value
//   }
</script>

<template>

      <div class="relative container grid grid-cols-1 rounded-[25px] bg-white w-112 h-112 shadow-md" @click="$emit('click', course)">
          <div class="absolute h-3/6 top-0">
                <img
                        class="w-full rounded-t-[25px]  object-cover mb-3"
                        alt="abc"
                        src='https://jekyll-atlantic.netlify.app/assets/images/unsplash-CTivHyiTbFw-640x360.jpeg'
                      />
          </div>
            <div class="absolute h-3/6 top-2/4">
                <p>{{course?.name}}</p>
           <div class=" container">
         <div
      v-for="tag in course?.course?.channelChannelTags"
      :key="tag || ''"
      class="text-sm text-gray-600 mb-1"
    >
      <div
        class="mr-1.5 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-green-200 text-black-700"
      >
        {{ tag.tag.name }}
      </div>
    </div>
     </div> 

            </div>
            
</div>

</template>
