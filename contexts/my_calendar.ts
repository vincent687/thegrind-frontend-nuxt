import { Ref, ref, computed, inject, provide, readonly } from 'vue'
import { getMyCalendar } from '~~/api/my_calendar'
import { Lesson } from '~~/model/lesson'
import { FindLessonsParams } from '~~/model/query_schema'
import { getLessons,getLessonsByClassId } from '../api/course'

const LessonSymbol = Symbol()



export type Context = {
  state: Ref<State>
  isLoading: Ref<boolean>
  load: (email: string) => Promise<Lesson[]>
}

export type State =
  | { status: 'init' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: Lesson[]; total: number }


export const useMyCalendarProvide = () => {
  const lessonsCache = ref<Lesson[]>([])

  const isLoading = computed(() => state.value.status === 'loading')

  const state = ref<State>({ status: 'init' })

  const loadLessons = async (email: string) => {

      if (state.value.status === 'loading') {
        console.warn('still loading, skipping')
        return []
      }
      state.value = { status: 'loading' }

      try {
        // TODO remove artificial network latency
        await new Promise((resolve) => setTimeout(resolve, 500))
        let info = {}
        await  getMyCalendar(email).then((res) => {
          const lessons: Lesson[] =  res.data as Lesson[]
         // lessonsCache.value = [...lessonsCache.value, ...lessons]
          lessonsCache.value = [ ...lessons]
          state.value =
          info !== null
            ? { status: 'success', data: lessonsCache.value , total: res.data.length }
            : { status: 'error', error: 'unable to load account' }

            return lessons
        })
  
      } catch (error) {
        state.value = { status: 'error', error: error as string }
        return []
      }    
    
  }

  provide<Context>(LessonSymbol, {
    state: state,
    isLoading: readonly(isLoading),
    load: loadLessons,
  })
}

export const useMyCalendarInject  = () => {
  const localeContext = inject<Context>(LessonSymbol)

  if (!localeContext) {
    throw new Error(`no provider found for JobSymbol useJobsProvide`)
  }

  return localeContext
}
