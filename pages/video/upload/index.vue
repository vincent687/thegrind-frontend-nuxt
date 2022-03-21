<template>
  <div class="col-start-2 flex">
       <div class="container grid grid-cols-1">
          <div class="container">
            <PageTitle><IconBack  @click="$router.go(-1)" class="mr-3 my-auto" /> Upload Video  </PageTitle>  
          </div>
         
        <UploadCard v-if="!isMobile"></UploadCard>
        <MobileUploadCard v-else></MobileUploadCard>

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
    import MobileUploadCard from './components/MobileUploadCard.vue'
    import IconBack from '~/assets/css/icons/icon-go-back.svg'
    import PageTitle from '../../../components/global/PageTitle.vue'
    import { useDeviceInject } from '~~/contexts'


    const { isMobile } = useDeviceInject();
    const route = useRoute();


      

    onMounted(() => {
    
    })



</script>

<style></style>


