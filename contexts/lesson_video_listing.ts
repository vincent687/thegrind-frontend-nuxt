import { Ref, ref, computed, inject, provide, readonly } from 'vue'
import { Lesson } from '~~/model/lesson'
import { FindLessonParams } from '~~/model/query_schema'
import { getLesson } from '../api/course'

const LessonSymbol = Symbol()



export type Context = {
  state: Ref<State>
  isLoading: Ref<boolean>
  load: (filter: FindLessonParams) => Promise<Lesson>
}

export type State =
  | { status: 'init' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: Lesson; total: number }


export const useLessonProvide = () => {
  const lessonCache = ref<Lesson>()

  const isLoading = computed(() => state.value.status === 'loading')

  const state = ref<State>({ status: 'init' })

  const loadLesson = async (params: FindLessonParams) => {

      if (state.value.status === 'loading') {
        console.warn('still loading, skipping')
        return null
      }
      state.value = { status: 'loading' }

      try {
        // TODO remove artificial network latency
        await new Promise((resolve) => setTimeout(resolve, 500))
        let info = {}
        await getLesson(params.id).then((res) => {
          //const lesson: Lesson =  res.data.data.lesson as Lesson
          const lesson: Lesson =  res.data as Lesson
          lessonCache.value = {...lesson}

          state.value =
          info !== null
           // ? { status: 'success', data: lessonCache.value , total: res.data.data.total }
           ? { status: 'success', data: lessonCache.value , total: 1 }
            : { status: 'error', error: 'unable to load account' }

            return lesson
        })
  
      } catch (error) {
        state.value = { status: 'error', error: error as string }
        return null
      }    
    
  }

  provide<Context>(LessonSymbol, {
    state: state,
    isLoading: readonly(isLoading),
    load: loadLesson,
  })
}

export const useLessonInject = () => {
  const localeContext = inject<Context>(LessonSymbol)

  if (!localeContext) {
    throw new Error(`no provider found for JobSymbol useJobsProvide`)
  }

  return localeContext
}
