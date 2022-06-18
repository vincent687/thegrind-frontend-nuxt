<script setup lang="ts">
  import { ref, defineProps,  computed } from 'vue'

  
  const props = defineProps<{ slider: any }>()
  const { slider } = toRefs(props);
  const emit = defineEmits<{
    (e: 'click', hasLessons: any): void
  }>()
  
  const getIdPrevious = (value) =>{
    if(value == 0) {
      var id= `carousel-${slider.value.length-1}`
      return  id
    }
    else{
      var id= `carousel-${value - 1}`
      return  id
    }
  }

  const getIdNext = (value) =>{
    if(value == slider.value.length -1) {
      var id= "carousel-0"
      return  id
    }
    else{
      var id= `carousel-${value + 1}`
      return  id
    }
  }


</script>

<template>
  <div class="carousel relative shadow-2xl bg-white  w-full lg:rounded-[2.5rem]">
    <div class="carousel-inner relative overflow-hidden w-full lg:rounded-[2.5rem]">
      <!--Slide 1-->
      <div v-for="(slide,i) in slider" :key="slide.id">
          <input
        class="carousel-open"
        type="radio"
        :id="`carousel-${i}`"
        name="carousel"
        aria-hidden="true"
        hidden=""
        checked="checked"
      />
      <div class="carousel-item absolute opacity-0" style="height: 44vh">
        
        <img class="block h-full w-full  text-white text-5xl text-center object-cover"  :src="slide.attributes.url" />
      </div>
      <!-- <label 
        v-if="i == 0"
        :for="`carousel-${slider.length-1}`"
        class="
          prev
          control-1
          w-10
          h-10
          ml-2
          md:ml-10
          absolute
          cursor-pointer
          text-3xl
          hidden
          font-bold
          text-black
          hover:text-white
          rounded-full
          bg-white
          hover:bg-blue-700
          leading-tight
          text-center
          z-10
          inset-y-0
          left-0
          my-auto
        "
        >‹</label
      >
      <label 
        v-else
        :for="`carousel-${i - 1}`"
        class="
          prev
          control-1
          w-10
          h-10
          ml-2
           hidden
          md:ml-10
          absolute
          cursor-pointer
          text-3xl
          font-bold
          text-black
          hover:text-white
          rounded-full
          bg-white
          hover:bg-blue-700
          leading-tight
          text-center
          z-10
          inset-y-0
          left-0
          my-auto
        "
        >‹</label
      >
      <label
         v-if="i == slider.length -1"
        for="carousel-0"
        class="
          next
          control-1
          w-10
          h-10
          mr-2
          md:mr-10
          absolute
           hidden
          cursor-pointer
          text-3xl
          font-bold
          text-black
          hover:text-white
          rounded-full
          bg-white
          hover:bg-blue-700
          leading-tight
          text-center
          z-10
          inset-y-0
          right-0
          my-auto
        "
        >›</label
      >
      <label
         v-else
        :for="`carousel-${value + 1}`"
        class="
          next
          control-1
          w-10
          h-10
          mr-2
          md:mr-10
          absolute
           hidden
          cursor-pointer
          text-3xl
          font-bold
          text-black
          hover:text-white
          rounded-full
          bg-white
          hover:bg-blue-700
          leading-tight
          text-center
          z-10
          inset-y-0
          right-0
          my-auto
        "
        >›</label
      > -->
      </div>
      <!-- <input
        class="carousel-open"
        type="radio"
        id="carousel-1"
        name="carousel"
        aria-hidden="true"
        hidden=""
        checked="checked"
      />
      <div class="carousel-item absolute opacity-0" style="height: 36vh">
        <img class="block h-full w-full  text-white text-5xl text-center"  src="https://storage.googleapis.com/thegrind_videostorage/Whats_App_Image_2022_04_20_at_9_36_05_PM_d386c9fa5c/Whats_App_Image_2022_04_20_at_9_36_05_PM_d386c9fa5c.jpeg" />
      </div>
      <label
        for="carousel-3"
        class="
          prev
          control-1
          w-10
          h-10
          ml-2
          md:ml-10
          absolute
          cursor-pointer
          hidden
          text-3xl
          font-bold
          text-black
          hover:text-white
          rounded-full
          bg-white
          hover:bg-blue-700
          leading-tight
          text-center
          z-10
          inset-y-0
          left-0
          my-auto
        "
        >‹</label
      >
      <label
        for="carousel-2"
        class="
          next
          control-1
          w-10
          h-10
          mr-2
          md:mr-10
          absolute
          cursor-pointer
          hidden
          text-3xl
          font-bold
          text-black
          hover:text-white
          rounded-full
          bg-white
          hover:bg-blue-700
          leading-tight
          text-center
          z-10
          inset-y-0
          right-0
          my-auto
        "
        >›</label
      >


      <input
        class="carousel-open"
        type="radio"
        id="carousel-2"
        name="carousel"
        aria-hidden="true"
        hidden=""
      />
      <div class="carousel-item absolute opacity-0" style="height: 36vh">
        <img class="block h-full w-full  text-white text-5xl text-center"  src="https://storage.googleapis.com/thegrind_videostorage/the_grind_3bee08fb9d/the_grind_3bee08fb9d.png" />
      </div>
      <label
        for="carousel-1"
        class="
          prev
          control-2
          w-10
          h-10
          ml-2
          md:ml-10
          absolute
          cursor-pointer
          hidden
          text-3xl
          font-bold
          text-black
          hover:text-white
          rounded-full
          bg-white
          hover:bg-blue-700
          leading-tight
          text-center
          z-10
          inset-y-0
          left-0
          my-auto
        "
        >‹</label
      >
      <label
        for="carousel-3"
        class="
          next
          control-2
          w-10
          h-10
          mr-2
          md:mr-10
          absolute
          cursor-pointer
          hidden
          text-3xl
          font-bold
          text-black
          hover:text-white
          rounded-full
          bg-white
          hover:bg-blue-700
          leading-tight
          text-center
          z-10
          inset-y-0
          right-0
          my-auto
        "
        >›</label
      > -->


      <!-- Add additional indicators for each slide-->
      <ol class="carousel-indicators">
        <li class="inline-block mr-3" v-for="(slide,i) in slider" :key="slide.id">
          <label
            :for="`carousel-${i}`"
            class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >•</label
          >
        </li>
      </ol>
    </div>
  </div>
</template>
<style>
  .carousel-open:checked + .carousel-item {
    position: static;
    opacity: 100;
  }
  .carousel-item {
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
  }
  #carousel-1:checked ~ .control-1,
  #carousel-2:checked ~ .control-2,
  #carousel-3:checked ~ .control-3 {
    display: block;
  }
  .carousel-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
  }
  #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
  #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
  #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
    color: #2b6cb0; /*Set to match the Tailwind colour you want the active one to be */
  }
</style>