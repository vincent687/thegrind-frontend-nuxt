<template>
  <div class="col-start-2 flex">
       <div class="container grid grid-cols-1">
          <div class="container ">
            <PageTitle><IconBack  @click="$router.go(-1)" class="mr-3 my-auto" /> Video Edit </PageTitle>    
          </div>
         
        <EditCard v-if="!isMobile" :video="videoState?.data"></EditCard>
        <MobileEditCard v-else :video="videoState"></MobileEditCard>

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
    import MobileEditCard from './components/MobileEditCard.vue'
    import IconBack from '~/assets/css/icons/icon-go-back.svg'
    import PageTitle from '../../../components/global/PageTitle.vue'
    import { useDeviceInject, useMyVideoDetailInject } from '~~/contexts'
   
    const route = useRoute();
    const { state: videoState, load: loadMyVideoById } = useMyVideoDetailInject()
    const { isMobile } = useDeviceInject();

      

    onMounted(() => {
      loadMyVideoById({
        id: parseInt(route.params.id as string),
      })
    })



</script>

<style></style>


