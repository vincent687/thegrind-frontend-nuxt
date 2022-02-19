<template>
   <div class="pt-6">
                    <div @click="selectEvent()"
                      class="
                        px-2
                        py-2
                        cursor-pointer
                        flex
                        w-full
                        justify-center
                      "
                    >
                      <p
                        class="
                          text-base text-gray-500
                          dark:text-gray-100
                          font-medium
                        "
                        :class="{
                            'focus:outline-none' : isToday|| getLessonClass ,
                            'focus:ring-2' : isToday|| getLessonClass ,
                            'focus:ring-offset-2' : isToday|| getLessonClass ,
                            'focus:ring-indigo-700' : isToday,
                            'focus:bg-indigo-500' : isToday,
                            'hover:bg-indigo-500' : isToday,
                            'text-base' : isToday|| getLessonClass ,
                            'w-8': isToday || getLessonClass,
                            'h-8' : isToday || getLessonClass ,
                            'flex' : isToday|| getLessonClass ,
                            'items-center' : isToday|| getLessonClass ,
                            'justify-center' : isToday|| getLessonClass ,
                            'font-medium' : isToday|| getLessonClass ,
                            'text-white' : isToday || getLessonClass, 
                            'bg-indigo-700' : isToday,
                            'rounded-full' : isToday || getLessonClass ,
                            'bg-green-light':  getLessonClass,
                          }"
                      >
                         {{ label }}
                      </p>
                    </div>
                  </div>

</template>


<script setup lang="ts">
  import dayjs from "dayjs";
  import { ref, defineProps,  computed } from 'vue'

  
  const props = defineProps<{ day: any, isCurrentMonth: Boolean, isToday: Boolean, hasLessons: any }>()
  const { day, isCurrentMonth, isToday ,hasLessons } = toRefs(props);
  const emit = defineEmits<{
    (e: 'click', hasLessons: any): void
  }>()

  const getLessonClass = computed(() => {
    if(hasLessons.value)
    {
      if(hasLessons.value.length >0)
      {
        return true
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  })

  const label = computed(() => {
    if(day.value != null)
    {
       return dayjs(day.value.date).format("D");
    }
    else{
      ''
    }
   // return dayjs(day.value.date).format("D");
  })

  const selectEvent = () => {
     debugger
     if(hasLessons instanceof Event)
     {
     }
     else{
       debugger
       emit('click', hasLessons.value)
     }
 
  }


</script>
