<template>
  <div class="col-start-2 flex">
       <div class=" grid grid-cols-1 w-48w ml-[3vw]">
          <PageTitle>Bookmark</PageTitle>
        
         
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
        <div class="grid grid-cols-1 w-[29vw] mr-[2vw]">
              <SearchBar></SearchBar>

              <DescriptionCard  v-if="checkIfEmpty(getCurrentCompany)"  :company="getCurrentCompany"></DescriptionCard> 
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
import DescriptionCard from './components/DescriptionCard.vue'
import PageTitle from '../../components/global/PageTitle.vue'
import SearchBar from './components/SearchBar.vue'
import { checkIfEmpty } from "~~/utils/global" 
import { Company } from '~~/model/company'


import { useRoute } from 'vue-router';

const { state: companyState, load: loadCompanys } = useCompanysInject()

const route = useRoute();

let currentCompany = ref({})

const getCurrentCompany = computed(() => {
  return  currentCompany.value
})

const companyClicked = (company: Company) => {
     debugger;
     currentCompany.value = company
     //currentCourse.value = company
}


onMounted(() => {
 loadCompanys({
      skip: 1,
      pageSize: 4,
      filter: {
      },
    })
 
})

</script>

<style></style>
