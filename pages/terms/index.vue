<template>
  <div class="col-start-2 flex">
       <div class="grid grid-cols-1 m-auto">
           
            <PageTitle>Terms and Conditions</PageTitle>

        <TermsCard></TermsCard>
         
        </div>
  </div>
</template>



<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import TermsCard from './components/TermsCard.vue'
import PageTitle from '../../components/global/PageTitle.vue'
import { useRoute } from 'vue-router';

definePageMeta({
layout: "teams",
});



onMounted(() => {
})



</script>

<style></style>
