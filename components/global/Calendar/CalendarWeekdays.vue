<template>
  <thead>
                <tr>
                  <th v-for="weekday in weekdays" :key="weekday">
                    <div class="w-full flex justify-center">
                      <p
                        class="
                          text-base
                          font-medium
                          text-center text-gray-800
                          dark:text-gray-100
                        "
                      >
                          {{ weekday }}
                      </p>
                    </div>
                  </th>
                  
                </tr>
              </thead>

</template>



<script setup lang="ts">
  import { ref, defineProps,  computed } from 'vue'
  const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const weekdays = computed(() => {
    return WEEKDAYS
  })

</script>



