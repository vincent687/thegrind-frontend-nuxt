<template>
  <div class="col-start-2 flex">
       <div class="container grid grid-cols-1">
          <div class="container ">
            <PageTitle><IconBack  @click="$router.go(-1)" class="mr-3 my-auto" /> Video Edit </PageTitle>    
          </div>
         
        <EditCard v-if="!isMobile"></EditCard>
        <MobileEditCard v-else></MobileEditCard>

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
    import { useDeviceInject } from '~~/contexts'

    const route = useRoute();
    const { isMobile } = useDeviceInject();

      

    onMounted(() => {
    
    })



</script>

<style></style>


