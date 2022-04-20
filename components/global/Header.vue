<template>
  <!-- <div id="myHeader" class="flex items-center h-28 border-b border-b-grayOther-300 "> -->
   <!-- <div  v-scroll.self="myFunction" id="myHeader" class="flex items-centerborder-b border-b-grayOther-300  h-[100vh] overflow-y-auto"> -->

        <div  id="myHeader" class="flex items-centerborder-b border-b-grayOther-300 p-4 ">
    <Hamburger />
    <div class="text-center mx-auto  relative">
          <Logo  />
    </div>
    <div class="w-[20vw] text-center">
      <!-- <IconProfile />{{ getUserName }} -->
      <Avator>{{ getUserName }}</Avator>
    </div>
  </div>

      
</template>



<script setup lang="ts">
  import { ref, getCurrentInstance } from 'vue'
  import { useHamburgerInject } from '@/contexts'
  import { useRouter } from 'vue-router'
  import Hamburger from './Hamburger.vue'
  //import Logo from "../../assets/css/icons/thegrind-79 40.svg";
  import Logo from "../../assets/css/icons/thegrind-100 61.svg";
  import IconProfile from '~/assets/css/icons/icon-profile.svg';
  import Avator from './Avator.vue'
  

  const userName =  ref('user')

  const getUserName = computed(() => {
    debugger
    return userName.value
  })
  
  const myFunction = () => {
       debugger;
       console.log(1)
       var header = document.getElementById("myHeader");
       var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
          debugger;
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
    }
  debugger;
 

  onMounted(() => {
    let user = sessionStorage.getItem('user')
    
    if(user)
    {
      const userObj = JSON.parse(user);
      userName.value =  userObj.name
    }
    debugger;
    // debugger;
    // window.addEventListener('scroll',function(){
    //    debugger;
    //    console.log(1)
    //    var header = document.getElementById("myHeader");
    //    var sticky = header.offsetTop;
    //     if (window.pageYOffset > sticky) {
    //       debugger;
    //       header.classList.add("sticky");
    //     } else {
    //       header.classList.remove("sticky");
    //     }
    // });

 
})

</script>


<style>
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000
}
</style>