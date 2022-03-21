<template>
  <div class="flex justify-center mt-[2rem] 2xl:mt-32">
    <ul class="flex pagination">
      <!-- <ul class="flex pagination bg-white p-2 shadow-sm rounded"> -->
      <!-- <li class="pagination-item">
				<span
					class="rounded-l rounded-sm border border-gray-100 px-3 py-2 cursor-not-allowed no-underline text-gray-600 h-10"
					v-if="isInFirstPage"
				>&laquo;</span>
				<a
					v-else
					@click.prevent="onClickFirstPage"
					class="rounded-l rounded-sm border-t border-b border-l border-gray-100 px-3 py-2 text-gray-600 hover:bg-gray-100 no-underline"
					href="#"
					role="button"
					rel="prev"
				>
					&laquo;
				</a>
			</li> -->
      <li class="pagination-item">
        <!-- <IconPagePrevious @click="onClickPreviousPage" :class="{'cursor-not-allowed': isInFirstPage}"></IconPagePrevious> -->

        <a
          v-if="!isInFirstPage"
          :class="{ 'cursor-not-allowed': isInFirstPage }"
          class="
            rounded-full
            border border-grayOther-300
            px-3
            py-2
            hover:bg-gray-100
            text-gray-600
            no-underline
            mx-2
          "
          href="#"
          @click="isInFirstPage ? onClickNoAction : onClickPreviousPage"
          role="button"
        >
          &#10094;
        </a>
        <!-- <button
					type="button"
					@click="onClickPreviousPage"
					:disabled="isInFirstPage"
					aria-label="Go to previous page"
					class="rounded-sm border border-gray-100 px-3 py-2 hover:bg-gray-100 text-gray-600 no-underline mx-2 text-sm"
					:class="{'cursor-not-allowed': isInFirstPage}"
				>Previous</button> -->
      </li>

      <li v-for="page in pages" class="pagination-item" :key="page.name">
        <span
          class="
            rounded-full
            border border-grayOther-300
            px-3
            py-2
            bg-blackOther-100
            no-underline
            text-white
            cursor-not-allowed
            mx-2
          "
          v-if="isPageActive(page.name)"
          >{{ page.name }}</span
        >
        <a
          class="
            rounded-full
            border border-grayOther-300
            px-3
            py-2
            hover:bg-gray-100
            text-gray-600
            no-underline
            mx-2
          "
          href="#"
          v-else
          @click.prevent="onClickPage(page.name)"
          role="button"
          >{{ page.name }}</a
        >
      </li>

      <li class="pagination-item">
        <!-- <IconPageNext @click="onClickNextPage" :class="{'cursor-not-allowed':  isInLastPage}"></IconPageNext> -->
        <a
          v-if="!isInLastPage"
          :class="{ 'cursor-not-allowed': isInLastPage }"
          class="
            rounded-full
            border border-grayOther-300
            px-3
            py-2
            hover:bg-gray-100
            text-gray-600
            no-underline
            mx-2
          "
          href="#"
          @click="isInLastPage ? onClickNoAction : onClickNextPage"
          role="button"
        >
          &#10095;
        </a>
        <!-- <button
					type="button"
					@click="onClickNextPage"
					:disabled="isInLastPage"
					aria-label="Go to next page"
					class="rounded-sm border border-gray-100 px-3 py-2 hover:bg-gray-100 text-gray-600 no-underline mx-2 text-sm"
					:class="{'cursor-not-allowed': isInLastPage}"
				>Next</button> -->
      </li>

      <!-- <li class="pagination-item">
			
				<a
					class="rounded-r rounded-sm border border-gray-100 px-3 py-2 hover:bg-gray-100 text-gray-600 no-underline"
					href="#"
					@click.prevent="onClickLastPage"
					rel="next"
					role="button"
					v-if="hasMorePages"
				>&raquo;</a>
				<span
					class="rounded-r rounded-sm border border-gray-100 px-3 py-2 hover:bg-gray-100 text-gray-600 no-underline cursor-not-allowed"
					v-else
				>&raquo;</span>
			</li> -->
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'
import IconPageNext from '../../assets/css/icons/icon-page-next.svg'
import IconPagePrevious from '../../assets/css/icons/icon-page-previous.svg'
import { useRouter } from 'vue-router'

const emit = defineEmits<{
  (e: 'pagechanged', page: any): void
}>()

const props = defineProps<{
  maxVisibleButtons: number
  totalPages: number
  total: number
  perPage: number
  currentPage: number
  hasMorePages: Boolean
}>()
const {
  maxVisibleButtons,
  totalPages,
  total,
  perPage,
  currentPage,
  hasMorePages,
} = toRefs(props)

const startPage = computed(() => {
  if (currentPage.value === 1) {
    return 1
  }

  if (currentPage.value === totalPages.value) {
    return totalPages.value - maxVisibleButtons.value + 1
  }

  return currentPage.value - 1
})
const endPage = computed(() => {
  return Math.min(
    startPage.value + maxVisibleButtons.value - 1,
    totalPages.value
  )
})
const pages = computed(() => {
  const range = []

  for (let i = startPage.value; i <= endPage.value; i += 1) {
    range.push({
      name: i,
      isDisabled: i === currentPage.value,
    })
  }

  return range
})

const isInFirstPage = computed(() => {
  return currentPage.value === 1
})

const isInLastPage = computed(() => {
  return currentPage.value === totalPages.value
})

const onClickFirstPage = () => {
  emit('pagechanged', 1)
}

const onClickPreviousPage = () => {
  emit('pagechanged', currentPage.value - 1)
}

const onClickNoAction = () => {
}

const onClickPage = (page) => {
  emit('pagechanged', page)
}

const onClickNextPage = () => {
  emit('pagechanged', currentPage.value + 1)
}

const onClickLastPage = () => {
  emit('pagechanged', totalPages.value)
}

const isPageActive = (page) => {
  return currentPage.value === page
}
</script>
