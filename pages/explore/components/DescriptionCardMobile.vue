<script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useCompanyInject } from '~~/contexts';
  import { Company } from '~~/model/company';
  import { toFullDate } from "~~/utils/global" 
  import AvatarRound from "~~/assets/css/icons/avatar-round-45.svg";
  import Tab from './Tab.vue'

  defineProps<{ company: Company }>()
  const currentTab = ref(1)

  const changeTab = (tab) => {
  debugger;
  currentTab.value = tab.id
}


</script>


<template>
      <Tab  @click="changeTab"></Tab>
      <div class="relative grid grid-cols-1 rounded-[25px] bg-white w-[96%] h-[27rem] shadow-md p-4 overflow-y-auto mt-[1rem]">
          <div v-if="currentTab == 1">
                <div class="text-center" >
                    <img  class="rounded-[50%] m-auto  h-[8rem] w-[8rem]"  alt="thumbnail" :src="company?.attachment.url" />
                    <div class="grid">
                        <div class="font-bold text-green-light p-3.5 ">{{company?.companyInfo.name}}</div>
                    <div class="p-4 h-32 overflow-y-auto">
                        <ul class="list-[unset]">
                        <li>
                            StartDate: {{toFullDate(company?.companyInfo.create_date)}}
                        </li>
                        <li v-if="company?.companyInfo.comment">
                            {{company.companyInfo.comment}}
                        </li>
                        </ul>
                    
                    </div>
                    </div>
                    
                </div>
           </div>
          <div v-if="currentTab == 2">
              <div v-for="employee in company?.employees" :key="employee.id" class="flex my-5">
                    <img  class="rounded-[50%] ml-2.5 w-12 h-[5rem] w-[5rem]"  alt="thumbnail" :src="employee?.user.partner.attachment.url" />
                    <div class="grid">
                       <p class="m-auto ml-4">{{employee?.user.partner.name}}</p>
                       <p>{{employee?.user.partner.comment}}</p>
                    </div>
                  
                </div>
          </div>

        </div>

</template>
