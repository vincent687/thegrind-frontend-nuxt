<template>
 <NuxtLayout>
   <div class="col-start-2 flex">
       <div class="grid grid-cols-1 m-auto">
           
            <PageTitle>Terms and Conditions</PageTitle>

          

  
        <TermsCard></TermsCard>
         
        </div>
  </div>
 </NuxtLayout>
  
</template>



<script lang="ts">
export default {
  layout: 'teams',
}
</script>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import TermsCard from './components/TermsCard.vue'
import PageTitle from '../../components/global/PageTitle.vue'
import { useRoute } from 'vue-router';

const route = useRoute();


onMounted(() => {
  route.meta.layout = "teams"
})



</script>

<style></style>
