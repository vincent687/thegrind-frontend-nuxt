import { Ref, ref, computed, inject, provide, readonly } from 'vue'
import { Tutor } from '~~/model/course'
import { FindMyCoursesParams } from '~~/model/query_schema'
import { getMyCourses } from '../api/course'

const CourseSymbol = Symbol()



export type Context = {
  state: Ref<State>
  isLoading: Ref<boolean>
  load: (filter: FindMyCoursesParams) => Promise<Tutor[]>
}

export type State =
  | { status: 'init' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: Tutor[]; total: number }


export const useCoursesProvide = () => {
  const coursesCache = ref<Tutor[]>([])

  const isLoading = computed(() => state.value.status === 'loading')

  const state = ref<State>({ status: 'init' })

  const loadCourses = async (params: FindMyCoursesParams) => {

      if (state.value.status === 'loading') {
        console.warn('still loading, skipping')
        return []
      }
      state.value = { status: 'loading' }

      try {
        // TODO remove artificial network latency
        await new Promise((resolve) => setTimeout(resolve, 500))
        let info = {}
        debugger
        //await getCourses(params).then((res) => {
      await getMyCourses(params).then((res) => {
          debugger
         // const courses: Tutor[] =  res.data.data.courses as Tutor[]
          const courses: Tutor[] =  res.data.data as Tutor[]
          // coursesCache.value = [...coursesCache.value, ...courses]
          coursesCache.value = [ ...courses]
          state.value =
          info !== null
           // ? { status: 'success', data: coursesCache.value , total: res.data.data.total }
           ? { status: 'success', data: coursesCache.value , total: res.data.meta.total }
            : { status: 'error', error: 'unable to load account' }

            return courses
        })
  
      } catch (error) {
        state.value = { status: 'error', error: error as string }
        return []
      }    
    
  }

  provide<Context>(CourseSymbol, {
    state: state,
    isLoading: readonly(isLoading),
    load: loadCourses,
  })
}

export const useCoursesInject = () => {
  const localeContext = inject<Context>( CourseSymbol)

  if (!localeContext) {
    throw new Error(`no provider found for JobSymbol useJobsProvide`)
  }

  return localeContext
}
