<!-- CalendarDateIndicator.vue -->
<template>
          <span
              tabindex="0"
              class="
                focus:outline-none
                text-base
                font-bold
                dark:text-gray-100
                text-green-light
              "
              >{{selectedMonth}}</span
            >
</template>

<!-- <script lang="ts">
// export default {
//   props: {
//     selectedDate: {
//       type: Object,
//       required: true
//     }
//   },

//   computed: {
//     selectedMonth() {
//       return this.selectedDate.format("MMMM YYYY");
//     }
//   }
// };
// </script> -->


<script setup lang="ts">
  import { ref, defineProps,  computed } from 'vue'

  
  const props = defineProps<{ selectedDate: any }>()
  const { selectedDate } = toRefs(props);

  const selectedMonth = computed(() => {
    return selectedDate.value.format("MMMM YYYY");
    //return selectedDate.value.format("MMMM YYYY");
  })

</script>