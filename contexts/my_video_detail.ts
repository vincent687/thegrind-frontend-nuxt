import { Ref, ref, computed, inject, provide, readonly } from 'vue'
import { getMyVideoById } from '~~/api/my_video'
import { FindVideoParams } from '~~/model/query_schema'

import { File } from '~~/model/file'

const  FileSymbol = Symbol()

export type Context = {
  state: Ref<State>
  isLoading: Ref<boolean>
  load: (filter: FindVideoParams) => Promise<File>
}

export type State =
  | { status: 'init', data: any }
  | { status: 'loading' , data: any }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: File; total: number }




export const useMyVideoDetailProvide = () => {
  const  fileCache = ref<File>()

  const isLoading = computed(() => state.value.status === 'loading')

  const state = ref<State>({ status: 'init', data: {} })


  const loadMyVideo = async (params: FindVideoParams) => {

      if (state.value.status === 'loading') {
        console.warn('still loading, skipping')
        return null
      }
      state.value = { status: 'loading', data: {} }

      try {
        // TODO remove artificial network latency
        await new Promise((resolve) => setTimeout(resolve, 500))
        let info = {}
        await getMyVideoById(params.id).then((res) => {
         
            debugger
      
         const file: File =  res.data as File
         fileCache.value = {...file}

          state.value =
          info !== null
            ? { status: 'success', data: fileCache.value , total: 1 }
            : { status: 'error', error: 'unable to load account' }

            return file
        })
  
      } catch (error) {
        state.value = { status: 'error', error: error as string }
        return null
      }    
    
  }
  

  provide<Context>(FileSymbol, {
    state: state,
    isLoading: readonly(isLoading),
    load: loadMyVideo,
  })
}

export const useMyVideoDetailInject = () => {
  const localeContext = inject<Context>(FileSymbol)

  if (!localeContext) {
    throw new Error(`no provider found for  FileSymbol useVideosProvide`)
  }

  return localeContext
}
