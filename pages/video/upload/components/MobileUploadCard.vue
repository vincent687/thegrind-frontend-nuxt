<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import DropdownButton from '../../../../components/global/DropdownButton.vue'
  const router = useRouter()
  const emit = defineEmits<{
    (e: 'upload', value: any): void
  }>()
  const file = ref(null);
  const filename = ref('')
  const url = ref('')

  const upload = () => {
     debugger
      var data = {
        file: file.value.files[0],
        filename: filename.value,
        name: filename.value,
        type: 1,
        classId: 1,
        url: url.value,
        userId: 1
      }
      emit("upload", data);
  }

</script>

<template>
  <div class="mt-[2rem]">      
    <div class="grid mb-4">
        <label class="text-grayOther-400"> Video Title </label>
        <input class="rounded-[2rem] border border-grayOther-400 "  v-model="filename" >
        <label class="text-grayOther-400">Class </label>
        <DropdownButton></DropdownButton>
        <label class="text-grayOther-400">Video Link </label>
        <input class="rounded-[2rem] border border-grayOther-400" v-model="url" >
        <label class="text-grayOther-400">Choose File </label>
        <input type="file" ref="file"
            id="avatar" name="avatar"
            accept="image/png, image/jpeg">
    </div>
    <button class="border-2 border-green-light rounded-full bg-green-light ml-4  w-[7rem] text-white"  @click="upload"> Upload </button>


   
  </div>
</template>
