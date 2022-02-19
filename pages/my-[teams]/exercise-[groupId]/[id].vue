<template>
  <div class="col-start-2 flex">
       <div class="grid grid-cols-1 w-48w m-auto">
           <PageTitle>  Event Video </PageTitle>
            <div id="player"></div>
        <!-- <video :src="videoState.data?.url"></video> -->
        <iframe id="existing-iframe-example"
              allowfullscreen="1"
              width="640" height="360"
              :src="getYoutubeUrl"
              frameborder="0"
              style="border: solid 4px #37474F; width: 50vw;"
      ></iframe>
        
        </div>
        <div class="grid grid-cols-1 w-[22vw]">
          <NuxtLink :to="`/my-teams/exercise-${route.params.groupId[0]}/5`"  >   <ExerciseCard   :video="lessonState.data?.videos[count]" /> </NuxtLink>
            <div class="m-auto">
                <IconPrevious @click="getPrevVideo" v-if="count != 0" class="inline-block mr-40" />
                <IconNext   @click="getNextVideo" v-if="lessonState.data?.videos.length -1 > count" class="inline-block" />
            </div>
        </div>

      

  </div>
</template>




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
import PageTitle from '../../../components/global/PageTitle.vue'
import IconPrevious from "../../../assets/css/icons/button-previous.svg";
import IconNext from "../../../assets/css/icons/button-next.svg";

const { state: videoState, load: loadVideo } = useVideoInject()
const { state: lessonState, load: loadLesson} = useLessonInject()
const route = useRoute();
const count = ref(0)


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


const getPrevVideo = () => {
   if(count.value> 0)
   {
      count.value--
   }
}
const getNextVideo = () => {
   if(lessonState.value.status === "success")
   {
      if(count.value < lessonState.value.data?.videos.length - 1)
      {
          count.value++
      }
   }
   
}

onMounted(() => {
  loadLesson({
      id: parseInt(route.params.groupId[0]),
      skip: 1,
      pageSize: 4,
      filter: {
      },
    })
 loadVideo({
      id: parseInt(route.params.id[0]),
      skip: 1,
      pageSize: 4,
      filter: {
      },
    });
})



</script>

<style></style>


