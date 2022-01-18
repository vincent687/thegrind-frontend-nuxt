<template>
  <div class="container grid grid-cols-1 border border-2 rounded-lg bg-white w-12 h-96">
    <div class="container">
         <p>{{$t('hamburger.myTeams')}}</p>
     </div> 
    <div class="container">
        <p>My Profile</p> 
     </div> 
     <div class="container" v-for="subCat in myProfileSubCategory" :key="subCat.name">
         <p class="text-center">{{subCat.name}}</p>
     </div>
     <div class="container">
         <p>Explore</p>
     </div> 

  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

let myProfileSubCategory = ref([
        {
            name: "Info"
        },
        {
            name: "Bookmark"
        },
        {
            name: "Subscription"
        },
        {
            name: "Video"
        },
        {
            name: "Notification"
        },
        {
            name: "My Calendar"
        },
    ])
// export default {
//   async setup() {
//     const { params } = useRoute()

//     // let myProfileSubCategory = ref([
//     //     {
//     //         name: "Info"
//     //     },
//     //     {
//     //         name: "Bookmark"
//     //     },
//     //     {
//     //         name: "Subscription"
//     //     },
//     //     {
//     //         name: "Video"
//     //     },
//     //     {
//     //         name: "Notification"
//     //     },
//     //     {
//     //         name: "My Calendar"
//     //     },
//     // ])


//     return { }
//     //return {  myProfileSubCategory}
//   },
// }
</script>

<style></style>
