import { Ref, ref, computed, inject, provide, readonly } from 'vue'
import { Lesson, Video } from '~~/model/lesson'
import { FindLessonParams, FindVideoParams } from '~~/model/query_schema'
import { getLesson, getVideoByCourseId } from '../api/course'

const VideoSymbol = Symbol()



export type Context = {
  state: Ref<State>
  isLoading: Ref<boolean>
  load: (filter: FindVideoParams) => Promise<Video[]>
}

export type State =
  | { status: 'init' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: Video[]; total: number }


export const useCourseVideoProvide = () => {
  const videosCache = ref<Video[]>()

  const isLoading = computed(() => state.value.status === 'loading')

  const state = ref<State>({ status: 'init' })

  const loadCourseVideo = async (params: FindVideoParams) => {

      if (state.value.status === 'loading') {
        console.warn('still loading, skipping')
        return null
      }
      state.value = { status: 'loading' }

      try {
        // TODO remove artificial network latency
        await new Promise((resolve) => setTimeout(resolve, 500))
        let info = {}
        debugger
        await getVideoByCourseId(params.id).then((res) => {
          debugger
          //const lesson: Lesson =  res.data.data.lesson as Lesson
          const videos: Video[] =  res.data as Video[]
          videosCache.value = [...videos]

          state.value =
          info !== null
           // ? { status: 'success', data: lessonCache.value , total: res.data.data.total }
           ? { status: 'success', data: videosCache.value , total: res.data.length }
            : { status: 'error', error: 'unable to load account' }

            return videos
        })
  
      } catch (error) {
        state.value = { status: 'error', error: error as string }
        return null
      }    
    
  }

  provide<Context>(VideoSymbol, {
    state: state,
    isLoading: readonly(isLoading),
    load: loadCourseVideo,
  })
}

export const useCourseVideoInject = () => {
  const localeContext = inject<Context>(VideoSymbol)

  if (!localeContext) {
    throw new Error(`no provider found for JobSymbol useJobsProvide`)
  }

  return localeContext
}
