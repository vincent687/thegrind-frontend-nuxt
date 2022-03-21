 <script setup lang="ts">
  import { defineProps, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useCompanyInject } from '~~/contexts';
  import { Company } from '~~/model/company';
  import { toFullDate } from "~~/utils/global" 
  import AvatarRound from "~~/assets/css/icons/avatar-round-45.svg";
  import DescriptionCard from  './components/DescriptionCard.vue';
  import DescriptionCardMobile from  './components/DescriptionCardMobile.vue';
  import { isMobile } from '~~/utils/global'
  import IconBack from '~/assets/css/icons/icon-go back.svg';
  import PageTitle from '../../components/global/PageTitle.vue'

 
  const route = useRoute()
  const mobile = ref(false)
  const { state: companyState, load: loadCompany } = useCompanyInject()

  const router = useRouter()

  const getMobile = computed(() => {
    return  mobile.value
  })
  onMounted(() => {
    mobile.value = isMobile();
    loadCompany({
        id: parseInt(route.params.id[0]),
        skip: 1,
        pageSize: 4,
        filter: {
        },
    })
    
  })
</script>
<script lang="ts">
export default {
  layout: 'teams',
}
</script>

<template>
  <div>
    <PageTitle><IconBack  @click="$router.back()" class="mr-3 my-auto" />Explore</PageTitle>
    <DescriptionCard v-if="!getMobile" :company="companyState?.data"></DescriptionCard>
    <DescriptionCardMobile v-else :company="companyState?.data"></DescriptionCardMobile>
  </div>

</template>

