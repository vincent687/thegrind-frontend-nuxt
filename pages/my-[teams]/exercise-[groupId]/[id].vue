
<script lang="ts">
export default {
  layout: 'teams',
}
onMounted(() => {
 let tag = window.document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = window.document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
      function onYouTubeIframeAPIReady() {
        player = new window['YT'].Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            'playsinline': 1,
            'fs':1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

       function onPlayerReady(event) {
        event.target.playVideo();
        
      }
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == window['YT'].PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

})


</script>



<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useVideoInject, useLessonInject } from '~~/contexts'
import ExerciseCard from './components/ExerciseCard.vue'
import CommentCard from './components/CommentCard.vue'
import PageTitle from '../../../components/global/PageTitle.vue'
import IconPrevious from "../../../assets/css/icons/button-previous.svg";
import IconNext from "../../../assets/css/icons/button-next.svg";
import IconBack from "../../../assets/css/icons/icon-go-back.svg";
import { isMobile } from '~~/utils/global'
import Tab from './components/Tab.vue'

const { state: videoState, state2: otherVideosState, load: loadVideo, load2: loadOtherVideos } = useVideoInject()
const { state: lessonState, load: loadLesson} = useLessonInject()
const route = useRoute();
const count = ref(0)
const mobile = ref(false)
const currentTab = ref(1)

const getYoutubeUrl = computed(() => {
  if(videoState.value.status === 'success')
  {
    let result = videoState.value.data?.url.replace('https://youtu.be/','https://www.youtube.com/embed/')
    return result

  }
  else{
    return ''
  }
})
const getMobile = computed(() => {
  return  mobile.value
})

const getCurrentTab = computed(() => {
  return currentTab.value
})

const getPrevVideo = () => {
   if(count.value> 0)
   {
      count.value--
   }
}
const getNextVideo = () => {
   debugger;
   if(otherVideosState.value.status === "success")
   {
      if(count.value < otherVideosState.value.data?.length - 1)
      {
          count.value++
      }
   }
}

const changeTab = (tab) => {
  debugger;
  currentTab.value = tab.id
}



onMounted(() => {
   mobile.value = isMobile();
   debugger
  loadOtherVideos({
      id: parseInt(route.params.groupId as string),
      skip: 1,
      pageSize: 4,
      filter: {
      },
    })
 loadVideo({
      id: parseInt(route.params.id as string),
      skip: 1,
      pageSize: 4,
      filter: {
      },
    });
})



</script>

<style></style>

<template>
  <div class="col-start-2 grid">

       <PageTitle class="col-start-1 col-end-2 row-start-1 row-end-2 " ><IconBack class="mr-3 my-auto" @click="$router.go(-1)" />  Event Video </PageTitle>
       <div class="grid  2xl:w-48w w-[90vw] m-auto mt-10 row-start-2 row-end-3" >
           <!-- <PageTitle style="grid-column-start: 1; grid-column-end: 2;">  Event Video </PageTitle> -->
            <div id="player"></div>
            <!-- <video :src="videoState.data?.url"></video> -->
            <iframe id="existing-iframe-example" class="rounded-t-[25px]  w-[87vw] 2xl:w-48w"
                  allowfullscreen="1"
                  width="640" height="360"
                  :src="getYoutubeUrl"
                  frameborder="0"
                  style="border: solid 4px #37474F;"
            ></iframe>
        
            <CommentCard :video="videoState">
              <Tab v-if="getMobile" @click="changeTab"></Tab>
              <div v-if="getMobile && getCurrentTab == 2" class="grid grid-cols-1 2xl:w-[22vw] mt-10 col-start-2 row-start-2 row-end-3 h-[50%] overflow-y-auto">
                      <NuxtLink :to="`/my-teams/exercise-${route.params.groupId[0]}/5`" v-if="otherVideosState.data" >   <ExerciseCard   :video="otherVideosState?.data[count]" /> </NuxtLink> 
                      <div v-if="otherVideosState.data" class="m-auto">
                            <IconPrevious @click="getPrevVideo" v-if="count != 0" class="inline-block mr-40" /> 
                            <IconNext   @click="getNextVideo" v-if="otherVideosState.data.length -1 > count" class="inline-block" />
                      </div>
              </div>
            </CommentCard>
        </div>
        <div  v-if="!getMobile" class="grid grid-cols-1 w-[22vw] mt-10 col-start-2 row-start-2 row-end-3 h-[20%]">

           <NuxtLink :to="`/my-teams/exercise-${route.params.groupId[0]}/5`" v-if="otherVideosState.data" >   <ExerciseCard   :video="otherVideosState?.data[count]" /> </NuxtLink> 
           <div v-if="otherVideosState.data" class="m-auto">
                <IconPrevious @click="getPrevVideo" v-if="count != 0" class="inline-block mr-40" /> 
                <IconNext   @click="getNextVideo" v-if="otherVideosState.data.length -1 > count" class="inline-block" />
            </div>
        </div>

      

  </div>
</template>






