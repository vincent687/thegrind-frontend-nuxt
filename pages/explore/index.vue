<template>
  <div class="col-start-2 flex">
       <div class="container grid grid-cols-1">
          <PageTitle>Explore</PageTitle>
          <SearchBar></SearchBar>
         
          <div v-if="companyState.status !='success' ">
            No record
          </div>

          <div v-else >
                  <div class="inline-block">
                    <AvatarCard class="m-9" v-for="index in 2" :key="index" :company="companyState.data[index - 1]" @click="companyClicked"></AvatarCard>
                  </div>
                  <div class="inline-block">
                    <AvatarCard class="m-9" v-for="index in 2" :key="index" :company="companyState.data[index + 1]" @click="companyClicked"></AvatarCard>
                </div>
          </div>


         
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
import { useCompanysInject } from '../../contexts'
import AvatarCard from './components/AvatarCard.vue'
import PageTitle from '../../components/global/PageTitle.vue'
import SearchBar from './components/SearchBar.vue'

import { Company } from '~~/model/company'


import { useRoute } from 'vue-router';

const { state: companyState, load: loadCompany } = useCompanysInject()

const route = useRoute();

const companyClicked = (company: Company) => {
     debugger;
     //currentCourse.value = company
}


onMounted(() => {
 loadCompany({
      skip: 1,
      pageSize: 4,
      filter: {
      },
    })
 
})

</script>

<style></style>
