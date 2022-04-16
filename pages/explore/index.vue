<template>
  <div class="col-start-2 flex">
       <div class=" grid grid-cols-1 w-48w ml-[3vw]">
          <div class="flex justify-between">
            <PageTitle>Explore</PageTitle>
            <SearchBar></SearchBar>
           
         
          </div>
 
          <div v-if="companyState.status !='success' ">
            No record
          </div>

          <div v-else >
            <div class="flex" v-for="rowIdx in Math.ceil(companyState.data.length / getScreenRow)" :key="rowIdx">
                        <div class="one-third column" v-for="company in  companyState.data.slice(getScreenRow * (rowIdx - 1), getScreenRow * rowIdx)" :key="company.id">
                           <NuxtLink :to="`/explore/${company.id}`">  <AvatarCard class="m-9" :company="company" @click="companyClicked"></AvatarCard> </NuxtLink>
                        </div>
</div>
                  <div class="inline-block">
                    
                      <!-- <AvatarCard class="m-9" v-for="company in companyState.data" :key="company.id" :company="company" @click="companyClicked"></AvatarCard> -->
                    <!-- <AvatarCard class="m-9" v-for="index in 2" :key="index" :company="companyState.data[index - 1]" @click="companyClicked"></AvatarCard> -->
                  </div>
                  <!-- <div class="inline-block">
                    <AvatarCard class="m-9" v-for="index in 2" :key="index" :company="companyState.data[index + 1]" @click="companyClicked"></AvatarCard>
                </div> -->
          </div>
            <Pagination  v-if="getMobile" class="w-[91vw]" :total-pages="getTotalPages" :total="getTotal" :per-page="perPage" :current-page="currentPage" :maxVisibleButtons="maxVisibleButtons"
      :has-more-pages="hasMorePages" @pagechanged="showMore"></Pagination>
            <Pagination v-else  :total-pages="getTotalPages" :total="getTotal" :per-page="perPage" :current-page="currentPage" :maxVisibleButtons="maxVisibleButtons"
            :has-more-pages="hasMorePages" @pagechanged="showMore"></Pagination>
        
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
import { checkIfEmpty, isMobile } from "~~/utils/global" 
import { Company } from '~~/model/company'
import Pagination from '~/components/global/Pagination.vue'

import { useRoute } from 'vue-router';

const { state: companyState, load: loadCompany } = useCompanysInject()

const router = useRouter();

let currentCompany = ref({})

const getCurrentCompany = computed(() => {
  return  currentCompany.value
})

const getCompanys  = computed(() => {
  debugger;
  return   companyState.value
})



const getScreenRow = computed(() => {
  if (process.client) {
    if(window.innerWidth < 1149)
    {
      return  2
    }
    if(window.innerWidth >= 1149 && window.innerWidth < 1556)
    {
      return  3
    }
    else if (window.innerWidth >= 1556 && window.innerWidth < 1915)
      return  4
    else{
      return 5
    }
  }
  else{
    return 2
  }
})
  const mobile = ref(false)
  let page = ref(1)
  let totalPages= ref(4)
  let total= ref(40)
  let perPage = ref(15)
  let currentPage = ref(1)
  let hasMorePages = ref(true)
  let maxVisibleButtons = ref(3)
  const getTotalPages = computed(() =>{
     if(companyState.value.status === 'success')
     {
       return    totalPages.value =  Math.ceil(companyState.value.data?.length /15)
     }
     else{
        return   totalPages.value
     }
 
  })
  const getTotal = computed(() =>{
       if(companyState.value.status === 'success')
       {
          return     total.value =  companyState.value.data?.length
       }
       else{
         return total.value
       }

  }) 
  const getMobile = computed(() => {
    return  mobile.value
  })

  const showMore = (goToPage) => {
      page.value = goToPage;
      currentPage.value = goToPage;
  }


const companyClicked = (company: Company) => {
     debugger;
     currentCompany.value = company
   //  router.push(`/explore/${company.id}`)
     //currentCourse.value = company
}


onMounted(() => {
  debugger;
  mobile.value = isMobile();
 loadCompany({
      skip: 1,
      pageSize: 4,
      filter: {
      },
    })
 
})

</script>

<style></style>
