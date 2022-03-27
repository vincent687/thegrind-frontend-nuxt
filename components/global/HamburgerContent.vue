<script setup lang="ts">
import { ref } from 'vue'
import { useHamburgerInject } from '@/contexts'
import { useRouter } from 'vue-router'
import IconTeam from '../../assets/css/icons/icon-team.svg'
import IconProfile from '../../assets/css/icons/icon-profile.svg'
import IconInfo from '../../assets/css/icons/icon-info.svg'
import IconBookmark from '../../assets/css/icons/icon-bookmark.svg'
import IconSubscription from '../../assets/css/icons/icon-subcription.svg'
import IconVideo from '../../assets/css/icons/icon-video.svg'
import IconNoti from '../../assets/css/icons/icon-noti.svg'
import IconCalendar from '../../assets/css/icons/icon-calendar-1.svg'
import IconExplore from '../../assets/css/icons/icon-explore.svg'

const { currentHamburger } = useHamburgerInject()

const router = useRouter()

let myProfileSubCategory = ref([
  {
    name: 'Info',
    component: IconInfo,
    value: 'Info',
  },
  {
    name: 'Bookmark',
    component: IconBookmark,
    value: 'Bookmark',
  },
  {
    name: 'Subscription',
    component: IconSubscription,
    value: 'Subscription',
  },
  {
    name: 'Video',
    component: IconVideo,
    value: 'Video',
  },
  {
    name: 'Notification',
    component: IconNoti,
    value: 'Notification',
  },
  {
    name: 'My Calendar',
    component: IconCalendar,
    value: 'My-Calendar',
  },
])
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value
//   }
</script>

<template>
  <div>
    <div
      :class="{ hidden: currentHamburger, flex: !currentHamburger }"
      class="
        rounded-[25px]
        bg-white
        2xl:w-72
        w-[18vw]
        h-[80vh]
        m-auto
        shadow-md
        relative
      "
    >
      <div class="grid p-9 h-[36rem]">
        <div class="container max-h-8">
          <p>
            <IconTeam class="inline-block" />
            <NuxtLink :to="`/my-teams`">
              {{ $t('hamburger.myTeams') }}
            </NuxtLink>
          </p>
        </div>
        <div class="container max-h-8">
          <p><IconProfile class="inline-block" /> My Profile</p>
        </div>
        <div
          class="container max-h-8"
          v-for="subCat in myProfileSubCategory"
          :key="subCat.name"
        >
          <p class="ml-8">
            <component class="inline-block" :is="subCat.component"> </component>
            <NuxtLink :to="`/${subCat.value}`"> {{ subCat.name }} </NuxtLink>
          </p>
        </div>
        <div class="container max-h-8">
          <p>
            <IconExplore class="inline-block" />
            <NuxtLink :to="`/explore`"> Explore </NuxtLink>
          </p>
        </div>
      </div>
      <div class="container absolute bottom-16 max-h-8 text-center">
        <p class="underline">
          <NuxtLink :to="`/terms`"> Terms and Condition </NuxtLink>
        </p>
      </div>
    </div>

    <div
      :class="{ hidden: !currentHamburger, flex: !currentHamburger }"
      class="container grid rounded-[25px] bg-white w-9 h-[80vh] shadow-md p-1"
    >
      <div class="grid h-160">
        <div class="container mt-5">
          <p><IconTeam /></p>
        </div>
        <div class="container">
          <p><IconProfile /></p>
        </div>
        <div
          class="container"
          v-for="subCat in myProfileSubCategory"
          :key="subCat.name"
        >
          <p class="text-center">
            <component :is="subCat.component"> </component>
          </p>
        </div>
        <div class="container">
          <p><IconExplore /></p>
        </div>
      </div>
    </div>
  </div>
</template>
