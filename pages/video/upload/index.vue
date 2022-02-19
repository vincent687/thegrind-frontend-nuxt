<template>
  <div class="col-start-2 flex">
       <div class="container grid grid-cols-1">
          <div class="container flex justify-between">
             Upload
          </div>
         
        <UploadCard></UploadCard>

        </div>

  </div>
 
 
</template>


<script lang="ts">
export default {
  layout: 'teams',
}
</script>
<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue'
    import UploadCard from './components/UploadCard.vue'


    const route = useRoute();


      

    onMounted(() => {
    
    })



</script>

<style></style>


