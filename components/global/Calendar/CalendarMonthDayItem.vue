<template>
   <td class="pt-6"  :class="{'bg-grayOther-400' : !isCurrentMonth,
                            'text-neutral-500': !isCurrentMonth,}">
     
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
                            'focus:outline-none' : isToday,
                            'focus:ring-2' : isToday,
                            'focus:ring-offset-2' : isToday,
                            'focus:ring-indigo-700' : isToday,
                            'focus:bg-indigo-500' : isToday,
                            'hover:bg-indigo-500' : isToday,
                            'text-base' : isToday,
                            'w-8': isToday,
                            'h-8' : isToday,
                            'flex' : isToday,
                            'items-center' : isToday,
                            'justify-center' : isToday,
                            'font-medium' : isToday,
                            'text-white' : isToday,
                            'bg-indigo-700' : isToday,
                            'rounded-full' : isToday,
                            'bg-blue-700':  getLessonClass
                          }"
                      >
                         {{ label }}
                      </p>
                    </div>
                  </td>

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
