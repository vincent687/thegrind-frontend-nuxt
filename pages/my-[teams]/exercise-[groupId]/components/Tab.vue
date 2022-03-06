<template>
<div class="border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px">
        <li class="mr-2" v-for="tab in  tabTitle" :key="tab.id" @click="changeTab(tab)"> 
            <a href="#" :class="{
             'text-gray-500': !isActiveTab(tab),
             'text-blue-600': isActiveTab(tab),
             'border-blue-600': isActiveTab(tab),
             'dark:border-blue-500': isActiveTab(tab),
             'dark:text-blue-500': isActiveTab(tab),
             'active': isActiveTab(tab),
             'dark:text-gray-400' : !isActiveTab(tab),
             'dark:hover:text-gray-300': !isActiveTab(tab),
             'hover:text-gray-600' : !isActiveTab(tab),
             'hover:border-gray-300': !isActiveTab(tab),
             'border-transparent': !isActiveTab(tab),
            }" class="inline-flex py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 group">
                {{ tab.title }}
            </a>
        </li>

       
        
    </ul>
</div>
</template>


<script setup lang="ts">
import { defineProps, ref, defineEmits } from 'vue'

 const emit = defineEmits<{
    (e: 'click', tab: any): void
  }>()

let tabTitle = [
    {
        id: 1,
        title: "Discussion"
    },
    {
        id: 2,
        title: "Video List"
    }
]
  
let currentTab = ref(1)

const isActiveTab = (tab) => {
    if(tab.id == currentTab.value)
    {
        return true
    }
    else{
        return false
    }
}

const changeTab = (tab) => {
    debugger;
    currentTab.value = tab.id
    emit('click', tab)

}




</script>