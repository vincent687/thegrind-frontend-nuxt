<script setup lang="ts">
  import dayjs from "dayjs";
  import weekday from "dayjs/plugin/weekday.js";
  import weekOfYear from "dayjs/plugin/weekOfYear.js";
  import CalendarDateIndicator from "./CalendarDateIndicator.vue";
  import CalendarDateSelector from "./CalendarDateSelector.vue";
  import CalendarMonthDayItem from './CalendarMonthDayItem.vue';
  import CalendarWeekdays from './CalendarWeekdays.vue';
  import { ref, defineProps,  computed, getCurrentInstance } from 'vue'
  import { Lesson } from '~~/model/lesson';
  import _ from "lodash"


  const emit = defineEmits<{
    (e: 'selectEvent', event: any): void
  }>()

  
  const props = defineProps<{ lessons: Lesson[] }>()
  const { lessons } = toRefs(props);

  dayjs.extend(weekday);
  dayjs.extend(weekOfYear);

  
  const selectedDate =  ref(dayjs())
  //const today =  ref(dayjs().format("YYYY-MM-DD"))
  const counter = ref(0)
  const list = ref([])
  const index =  [
  [0,1,2,3,4,5,6,7],
  [8,9,10,11,12,13,14],
  [15,16,17,18,19,20,21],
  [22,23,24,25,26,27,28],
  [29,30,31,32,33,34,35]
  ];


  const getCounter = computed(() => {
    debugger;
    return counter.value
  })
  
  const numberOfDaysInMonth = computed(() => {
      return dayjs(selectedDate.value).daysInMonth();
  })


  
   const days = computed(() => {

     return [
          ...previousMonthDays.value,
          ...currentMonthDays.value,
          ...nextMonthDays.value
      ];
  })

  const showCalander = computed(() => {
    debugger;
    return test.value
  })

  const today = computed(() => {
    return dayjs().format("YYYY-MM-DD");
  }) 
  
  const month = computed(() => {
     return Number(selectedDate.value.format("M"));
  }) 
 

  const year = computed(() => {
      return Number(selectedDate.value.format("YYYY"));
    })


  const currentMonthDays = computed(() => {

      return [...Array(numberOfDaysInMonth.value)].map((day, index) => {
            let date = dayjs(`${year.value}-${month.value}-${index + 1}`).format("YYYY-MM-DD")

            let matchLesson = lessons.value.filter(obj => {        
                return dayjs(obj.custom_deadline_date).format("YYYY-MM-DD") === date;
              });
            return {
                date: dayjs(`${year.value}-${month.value}-${index + 1}`).format("YYYY-MM-DD"),
                isCurrentMonth: true,
                hasLessons: matchLesson ?? false
            };
        });
    })

  const previousMonthDays = computed(() => {
    if(currentMonthDays.value[0]) 
    {
      const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays.value[0].date);
        const previousMonth = dayjs(`${year.value}-${month.value}-01`).subtract(1, "month");

        // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
        const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday ? firstDayOfTheMonthWeekday - 1 : 6;

        const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDays.value[0].date).subtract(visibleNumberOfDaysFromPreviousMonth, "day").date();

        return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
            return {
                date: dayjs(`${previousMonth.year()}-${previousMonth.month() + 1}-${previousMonthLastMondayDayOfMonth + index}`).format("YYYY-MM-DD"),
                isCurrentMonth: false,
                hasLessons:false
            }
        });
    }
    else{
      return []
    }
        
  })

  const nextMonthDays = computed(() => {
        const lastDayOfTheMonthWeekday = getWeekday(`${year.value}-${month.value}-${currentMonthDays.value.length}`);
        const nextMonth = dayjs(`${year.value}-${month.value}-01`).add(1, "month");
        const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday ? 7 - lastDayOfTheMonthWeekday : lastDayOfTheMonthWeekday;
        debugger;

        return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
        return {
            date: dayjs(`${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`).format("YYYY-MM-DD"),
            isCurrentMonth: false,
            hasLessons:false
        };
        });
  })

 

    const selectDate = (newSelectedDate) => {
      selectedDate.value = newSelectedDate;
      counter.value = 0
    }
    
  

    const updateCnt = () => {
      if(counter.value>=35)
      {
          counter.value = 35;
      }
      else{
        counter.value++;
      }
    }

    const getWeekday = (date) => {
     return dayjs(date).weekday();
    }
     

    const selectEvent = (event) => 
    {
      emit('selectEvent', event);
    }
    onMounted(() => {
    
    })
</script>


<!-- CalendarMonth.vue -->
<template>

  <div>
  
    <body class="bg-gray-200 2xl:min-h-screen min-h-[50%] dark:bg-gray-900">
   <div class="flex items-center justify-center py-8 px-4"> 
      <div class=" max-w-3xl w-full shadow-lg rounded-[25px]">
        <div class="dark:bg-gray-800 bg-white rounded-[25px] ">
            <div class="py-8 px-4 flex items-center justify-between bg-green-default  rounded-t-[25px] ">
             
               <!-- <CalendarDateIndicator
                  :selected-date="selectedDate"
                />
             -->
                <CalendarDateSelector 
                  :current-date="today"
                  :selected-date="selectedDate"
                  @dateSelected="selectDate"
                />
              
            
             </div>
             <div class="flex items-center justify-between overflow-x-auto padding p-4">
            <table class="w-full">
               <CalendarWeekdays />
              <tbody>
                <tr v-for="week in 5" :key="week" >
                  <td  v-for="weekDay in 7" :key="weekDay" class="w-8 justify-center"  :class="{
                            'bg-grayOther-400' : !days[index[week - 1][weekDay - 1]]?.isCurrentMonth,
                            'text-neutral-500':  !days[index[week - 1][weekDay - 1]]?.isCurrentMonth,
                         }">
                
                         
                    <CalendarMonthDayItem
                        :day="days[index[week - 1][weekDay - 1]]"

                        :is-today="days[index[week - 1][weekDay - 1]]?.date === today"
                        :has-lessons="days[index[week - 1][weekDay - 1]]?.hasLessons"
                        @click="selectEvent"
                      />
                       <!-- <CalendarMonthDayItem
                        :day="days[getCounter]"
                        @click="selectEvent"
                      /> -->
              
                  </td>
                 

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
 
  </body>
</div>


  <!-- <body class="bg-gray-200 2xl:min-h-screen min-h-[50%] dark:bg-gray-900">
   <div class="flex items-center justify-center py-8 px-4"> 
      <div class=" max-w-3xl w-full shadow-lg rounded-[25px]">
        <div class="dark:bg-gray-800 bg-white rounded-[25px] ">
            <div class="py-8 px-4 flex items-center justify-between bg-green-default  rounded-t-[25px] ">
             
         
                <CalendarDateSelector 
                  :current-date="today"
                  :selected-date="selectedDate"
                  @dateSelected="selectDate"
                />
              
            
             </div>
             <div class="flex items-center justify-between overflow-x-auto padding p-4">
            <table class="w-full">
               <CalendarWeekdays />
              <tbody>
                <tr v-for="week in 5" :key="week" >
                  <td  v-for="weekDay in 7" :key="weekDay" class="w-8 justify-center" :class="{'bg-grayOther-400' :  !days[getCounter].isCurrentMonth,
                            'text-neutral-500': !days[getCounter]?.isCurrentMonth}">
                    <CalendarMonthDayItem
                        :day="days[getCounter]"
                        :is-today="days[getCounter]?.date === today"
                        :has-lessons="days[getCounter]?.hasLessons"
                        @click="selectEvent"
                      />
         {{ updateCnt() }}
                  </td>
                 

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
 
  </body>
   -->
</template>



