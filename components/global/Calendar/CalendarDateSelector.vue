<!-- CalendarDateSelector.vue -->
<template>
<div class="flex items-center">
              <button
                @click="selectPrevious"
                aria-label="calendar backward"
                class="
                  focus:text-gray-400
                  hover:text-gray-400
                  text-gray-800
                  dark:text-gray-100
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
               <span @click="selectCurrent">Today</span>
              <button
               @click="selectNext"
                aria-label="calendar forward"
                class="
                  focus:text-gray-400
                  hover:text-gray-400
                  ml-3
                  text-gray-800
                  dark:text-gray-100
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>

</template>


<script setup lang="ts">
  import dayjs from "dayjs";
  import { ref, defineProps,  computed } from 'vue'
  
  const emit = defineEmits<{
    (e: 'dateSelected', date: dayjs.Dayjs): void
  }>()



  const props = defineProps<{  currentDate: any, selectedDate: any  }>()
  const { currentDate, selectedDate } = toRefs(props);

  const selectPrevious = () => {
      let newSelectedDate = dayjs(selectedDate.value).subtract(1, "month");
      emit("dateSelected", newSelectedDate);
  }

  const selectCurrent = () => {
      let newSelectedDate = dayjs(currentDate.value);
      emit("dateSelected", newSelectedDate);
    }

  const selectNext = () => {
      let newSelectedDate = dayjs(selectedDate.value).add(1, "month");
      emit("dateSelected", newSelectedDate);
    }

</script>

