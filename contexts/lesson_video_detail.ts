import { Ref, ref, computed, inject, provide, readonly } from 'vue'
import { Video } from '~~/model/lesson'
import { FindVideoParams } from '~~/model/query_chema'
import { getVideo, getVideosWithSection } from '../api/course'

const VideoSymbol = Symbol()



export type Context = {
  state: Ref<State>
  state2: Ref<State2>
  isLoading: Ref<boolean>
  load: (filter: FindVideoParams) => Promise<Video>
  load2: (filter: FindVideoParams) => Promise<Video[]>
}

export type State =
  | { status: 'init' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: Video; total: number }

export type State2 =
  | { status: 'init' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: Video[]; total: number }


export const useVideoProvide = () => {
  const videoCache = ref<Video>()

  const isLoading = computed(() => state.value.status === 'loading')

  const state = ref<State>({ status: 'init' })
  const state2 = ref<State2>({ status: 'init' })

  const loadVideo = async (params: FindVideoParams) => {

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
        await getVideo(params.id).then((res) => {
          debugger
          const video: Video =  res.data.data.video as Video
          videoCache.value = {...video}

          state.value =
          info !== null
            ? { status: 'success', data: videoCache.value , total: res.data.data.total }
            : { status: 'error', error: 'unable to load account' }

            return video
        })
  
      } catch (error) {
        state.value = { status: 'error', error: error as string }
        return null
      }    
    
  }
  const loadOtherVideos = async (params: FindVideoParams) => {

    if (state2.value.status === 'loading') {
      console.warn('still loading, skipping')
      return null
    }
    state2.value = { status: 'loading' }

    try {
      // TODO remove artificial network latency
      await new Promise((resolve) => setTimeout(resolve, 500))
      let info = {}
      debugger
      await getVideosWithSection(params.id).then((res) => {
        debugger
        const videos: Video[] =  res.data.data.videos as Video[]

          state2.value =
          info !== null
            ? { status: 'success', data: videos , total: res.data.data.total }
            : { status: 'error', error: 'unable to load account' }
          return videos
      })

    } catch (error) {
      state2.value = { status: 'error', error: error as string }
      return null
    }    
  
}

  provide<Context>(VideoSymbol, {
    state: state,
    state2: state2,
    isLoading: readonly(isLoading),
    load: loadVideo,
    load2: loadOtherVideos
  })
}

export const useVideoInject = () => {
  const localeContext = inject<Context>(VideoSymbol)

  if (!localeContext) {
    throw new Error(`no provider found for VideoSymbol useVideosProvide`)
  }

  return localeContext
}
