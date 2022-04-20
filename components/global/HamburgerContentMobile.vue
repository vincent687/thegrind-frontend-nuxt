<script setup lang="ts">
import { ref } from 'vue'
import { useHamburgerInject } from '@/contexts'
import { useRouter } from 'vue-router'
import IconTeamWhite from '../../assets/css/icons/icon-team-white.svg'
import IconProfileWhite from '../../assets/css/icons/icon-profile-white.svg'
import IconInfoWhite from '../../assets/css/icons/icon-info-white.svg'
import IconBookmarkWhite from '../../assets/css/icons/icon-bookmark-white.svg'
import IconSubscriptionWhite from '../../assets/css/icons/icon-subcription-white.svg'
import IconVideoWhite from '../../assets/css/icons/icon-video-white.svg'
import IconNotiWhite from '../../assets/css/icons/icon-noti-white.svg'
import IconCalendarWhite from '../../assets/css/icons/icon-calendar-white.svg'
import IconExploreWhite from '../../assets/css/icons/icon-explore-white.svg'
import ButtonCancel from '../../assets/css/icons/button-cancel.svg'

const { currentHamburger } = useHamburgerInject()

const router = useRouter()

const emit = defineEmits<{
  (e: 'close'): void
}>()

let myProfileSubCategory = ref([
  {
    name: 'Info',
    component: IconInfoWhite,
    value: 'Info',
  },
  {
    name: 'Bookmark',
    component: IconBookmarkWhite,
    value: 'Bookmark',
  },
  {
    name: 'Subscription',
    component: IconSubscriptionWhite,
    value: 'Subscription',
  },
  {
    name: 'Video',
    component: IconVideoWhite,
    value: 'Video',
  },
  {
    name: 'Notification',
    component: IconNotiWhite,
    value: 'Notification',
  },
  {
    name: 'My Calendar',
    component: IconCalendarWhite,
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
    <div class="bg-main-green w-full h-[100vh] shadow-md relative text-white">
      <div class="grid p-9 h-160 m-auto w-max">
        <div class="max-h-8 w-max">
          <p>
            <IconTeamWhite class="inline-block" />
            <NuxtLink :to="`/my-teams`" @click="emit('close')">
              {{ $t('hamburger.myTeams') }}
            </NuxtLink>
          </p>
        </div>
        <div class="container max-h-8 w-max">
          <p><IconProfileWhite class="inline-block" /> My Profile</p>
        </div>
        <div
          class="container max-h-8 w-max"
          v-for="subCat in myProfileSubCategory"
          :key="subCat.name"
        >
          <p class="ml-8">
            <component class="inline-block" :is="subCat.component"> </component>
            <NuxtLink :to="`/${subCat.value}`" @click="emit('close')"> {{ subCat.name }} </NuxtLink>
          </p>
        </div>
        <div class="container max-h-8 w-max">
          <p>
            <IconExploreWhite class="inline-block" />
            <NuxtLink :to="`/explore`" @click="emit('close')"> Explore </NuxtLink>
          </p>
        </div>
      </div>
      <div class="container bottom-16 max-h-8 m-auto w-max">
        <p class="underline">
          <NuxtLink :to="`/terms`" @click="emit('close')"> Terms and Condition </NuxtLink>
        </p>
      </div>
      <div class="max-h-8 m-auto w-max mt-[2rem]">
        <ButtonCancel @click="emit('close')" />
      </div>
    </div>
  </div>
</template>
