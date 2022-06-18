<script setup lang="ts">
  import { Notify } from 'vant';
import { defineProps, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { attendLesson, getLessonDetail } from '~~/api/course';
  import { Company } from '~~/model/company';
  import { Lesson } from '~~/model/lesson';
import { sessionSet } from '~~/utils/global';
  import { useLessonProvide } from '../../../contexts/lesson_video_listing';

  
  

  const router = useRouter()
  const route = useRoute()
  const params = reactive({lessonId: 0, courseId: 0})
  const lesson = ref({})
//   const showMenu = ref(false)
//   const toggleNavbar = () => {
//     showMenu.value = !showMenu.value
//   }

 const updateAttend = () => {
     debugger
     let user = sessionStorage.getItem('user')
     if(user)
     {
       attendLesson(
          {
            id:0,
            user_id:0,
            lesson_id: lesson.value.id,
            status: "absence",
            custom_status: "attend",
            create_date: "1900-01-01T07:36:42.000Z"
          }
       ).then((x) => {
         if(x.status= 200)
         {
           Notify({ type: 'success', message: "已報名" });
         }
         else{
            Notify({ type: 'danger', message: "不是該班學生" });
         }
       })
     }
     else{
        debugger
        sessionSet('event-invite',route.query.opts,10)
        router.push('/login/')
     }
 }

  onMounted(async () => {
  debugger
  if (route.query.opts) {
    debugger;
    var obj = JSON.parse(decodeURIComponent(atob(route.query.opts)))
    params.lessonId = obj.lessonId;
    params.courseId = obj.courseId;
  }
    await getLessonDetail(params.lessonId, params.courseId).then((u) => {
      debugger;
      lesson.value = u.data
    })
})
  

</script>

<template>

<div
    class="
      relative
      rounded-[3rem]
      h-[35rem]
      m-7
      opacity-90
      p-8
      w-[77vw]
      lg:w-[80vw]
      xl:w-[70vw]
      2xl:w-[60vw]
      max-w-[400px]
      ml-[1rem]
    "
  >
 

    <form class="space-y-8 divide-y divide-gray-200">
  <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
    <div>
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Course: {{lesson.course_name}} </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">Lesson Information. Please click attend if you want to attend the lesson</p>
      </div>

      <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="username" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Lesson Name </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg flex rounded-md shadow-sm">

              {{lesson.name}} 
            </div>
          </div>
        </div>

        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="about" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> About </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            {{lesson.description}} 
          </div>
        </div>
         <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="about" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Tutors </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div v-for="tutor in lesson.tutors" :key="tutor.user_id">
              {{tutor.user.name}}
            </div>

          </div>
        </div>
      </div>
    </div>


        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Start Date </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
           {{lesson.start_date}}
          </div>
           <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> End Date </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
           {{lesson.end_date}}
          </div>
        </div>

 
  
    
  </div>

  <div class="pt-5">
    <div class="flex justify-end">
      <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
      <button type="button" @click="updateAttend" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Attend</button>
    </div>
  </div>
</form>
  </div>
</template>