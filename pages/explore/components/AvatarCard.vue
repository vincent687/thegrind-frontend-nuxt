<script setup lang="ts">
  import { defineProps,defineEmits, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { Company } from '../../../model/company';
  
  defineProps<{ company:  Company }>()


  defineEmits<{
    (e: 'click', company:  Company ): void
  }>()


  const router = useRouter()
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value
//   }
</script>

<template>

      <div class="relative container grid grid-cols-1 rounded-[25px] bg-white w-56 h-56 shadow-md"   @click="$emit('click', company)">
          
                <img
                        class="w-full h-full rounded-[25px]  object-cover mb-3"
                        alt="abc"
                        :src='company.attachment.url'
                      />
        
            

            <div class="absolute bottom-0 rounded-b-[25px] w-full bg-green-default opacity-70 z-10 text-center text-green-light">
              {{company.name}}
            </div>
         
    </div>
</template>
