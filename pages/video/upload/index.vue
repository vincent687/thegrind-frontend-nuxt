<template>
    <div class="col-start-2 flex">
       <div class="container grid grid-cols-1">
          <div class="container">
            <PageTitle><IconBack  @click="$router.go(-1)" class="mr-3 my-auto" /> Upload Video  </PageTitle>  
          </div>
         
        <UploadCard v-if="!isMobile" @upload="submitUpload"></UploadCard>
        <MobileUploadCard v-else @upload="submitUpload"></MobileUploadCard>

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
    import { useDeviceInject, useMyVideoInject } from '~~/contexts'
    import { Notify } from 'vant'

definePageMeta({
  layout: 'teams',
});


    const { isMobile } = useDeviceInject();
    const { upload: uploadMyVideos } = useMyVideoInject()
    const route = useRoute();
    const router = useRouter()

    const submitUpload = async (value) =>
    {
      debugger
     

        await uploadMyVideos(value).then((res) => {
          debugger
          if(res.status == 201)
          {
              Notify({ type: 'success', message: '成功上載' })
              router.push('/video')
          }
          else{
            Notify({ type: 'danger', message: '上載失敗' })
          }
        });

    }
      

    onMounted(() => {
     
    })



</script>

<style></style>


