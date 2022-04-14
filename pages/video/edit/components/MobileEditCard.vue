<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import DropdownButton from '../../../../components/global/DropdownButton.vue'

  import { File } from '~~/model/file'
 

  const router = useRouter()
  const emit = defineEmits<{
    (e: 'edit', value: any): void
    (e: 'deleteVideo', value: any): void
  }>()


  const props = defineProps<{
    video: File
  }>()
  const {
    video
  } = toRefs(props)
  
  const file = ref(null);

  

  const edit = () => {
     debugger
      var data = {
        file: file.value.files[0],
        filename: video.value.name,
        name: video.value.name,
        type: 1,
        classId: 1,
        url: video.value.url,
        userId: 1
      }
      emit("edit", data);
  }

   const deleteVideo = () => {
     debugger
      var data = {
        file: file.value.files[0],
        filename:  video.value.name,
        name:  video.value.name,
        type: 1,
        classId: 1,
        url:  video.value.url,
        userId: 1
      }
      emit("deleteVideo", data);
  }

</script>

<template>
  <div class="mt-[2rem]">      
    <div class="grid mb-4">
        <label class="text-grayOther-400"> Video Title </label>
        <input class="rounded-[2rem] border border-grayOther-400 pl-2.5" v-model="video.name" >
        <label class="text-grayOther-400">Class </label>
        <DropdownButton></DropdownButton>
        <label class="text-grayOther-400">Video Link </label>
        <input class="rounded-[2rem] border border-grayOther-400 pl-2.5"  v-model="video.url"  >
        <label class="text-grayOther-400">Choose File </label>
        <input type="file"
            id="avatar" name="avatar"
            accept="image/png, image/jpeg">
    </div>
    <button class="border-2 border-green-light rounded-full bg-green-light ml-4  w-[7rem] text-white" @click="edit"> Save </button>
    <button class="border-2 border-red-600 rounded-full ml-4 w-[7rem] text-red-600"  @click="deleteVideo"> Delete </button>


   
  </div>
</template>
