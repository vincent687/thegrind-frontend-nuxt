<template>
  <div class="col-start-2 flex">
       <div class="container grid grid-cols-1">
          <div class="container ">
            <PageTitle><IconBack  @click="$router.go(-1)" class="mr-3 my-auto" /> Video Edit </PageTitle>    
          </div>
         
        <EditCard></EditCard>

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
    import EditCard from './components/EditCard.vue'
    import IconBack from '~/assets/css/icons/icon-go back.svg'
    import PageTitle from '../../../components/global/PageTitle.vue'

    const route = useRoute();


      

    onMounted(() => {
    
    })



</script>

<style></style>


