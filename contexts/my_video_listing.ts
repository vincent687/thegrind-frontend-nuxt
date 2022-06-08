import { Ref, ref, computed, inject, provide, readonly } from 'vue'
import { FindVideoParams, UploadFileParams } from '~~/model/query_schema'

import { File } from '~~/model/file'
import { getMyVideoByUserId, uploadFileWithFilePath, uploadFileWithUrl } from '../api/my_video'


const  FileSymbol = Symbol()

export type Context = {
  state: Ref<State>
  isLoading: Ref<boolean>
  load: (filter: FindVideoParams) => Promise<File[]>
  upload: (data: UploadFileParams) =>  Promise<any>
}

export type State =
  | { status: 'init' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: File[]; total: number }


export const useMyVideoProvide = () => {
    debugger;
    const filesCache = ref<File[]>()
  
    const isLoading = computed(() => state.value.status === 'loading')
  
    const state = ref<State>({ status: 'init' })
  
    const loadMyVideos = async (params: FindVideoParams) => {
      debugger;
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
          await getMyVideoByUserId(params.id).then((res) => {
            debugger
            //const lesson: Lesson =  res.data.data.lesson as Lesson
            const files: File[] =  res.data as File[]
            filesCache.value = [...files]
  
            state.value =
            info !== null
             // ? { status: 'success', data: lessonCache.value , total: res.data.data.total }
             ? { status: 'success', data: filesCache.value , total: res.data.length }
              : { status: 'error', error: 'unable to load account' }
  
              return files
          })
    
        } catch (error) {
          state.value = { status: 'error', error: error as string }
          return null
        }    
      
    }
    const uploadFiles = async (params: UploadFileParams) => {
        try {
    
          // TODO remove artificial network latency
          await new Promise((resolve) => setTimeout(resolve, 500))
          let info = {}
          debugger

          if(params.url)
          {
            debugger
            
            return await uploadFileWithUrl(params).then(async (res) =>
            {
                if(res.status == 201)
               {
                    await getMyVideoByUserId(params.userId).then((res) => {
                        debugger
                        //const lesson: Lesson =  res.data.data.lesson as Lesson
                        const files: File[] =  res.data as File[]
                        filesCache.value = [...files]
                
                        state.value =
                        info !== null
                        // ? { status: 'success', data: lessonCache.value , total: res.data.data.total }
                        ? { status: 'success', data: filesCache.value , total: res.data.length }
                        : { status: 'error', error: 'unable to load account' }
                    })
               }
                return res
            })
          }
          else
          {
            debugger
            let formData = new FormData();

           
            formData.append('file',params.file);
            formData.append('name', params.filename);
            formData.append('filename', params.filename);
            formData.append('classId', params.classId);
            formData.append('userId', params.userId);
            formData.append('type', params.type);
            return  await uploadFileWithFilePath(formData).then(async (res) =>
            {
                debugger
               if(res.status == 201)
               {
                    await getMyVideoByUserId(params.userId).then((res) => {
                        debugger
                        //const lesson: Lesson =  res.data.data.lesson as Lesson
                        const files: File[] =  res.data as File[]
                        filesCache.value = [...files]
                
                        state.value =
                        info !== null
                        // ? { status: 'success', data: lessonCache.value , total: res.data.data.total }
                        ? { status: 'success', data: filesCache.value , total: res.data.length }
                        : { status: 'error', error: 'unable to load account' }
                    })
               }
                
                return res
            })
          }
     
        } catch (error) {
          state.value = { status: 'error', error: error as string }
        }    
    }

  provide<Context>(FileSymbol, {
    state: state,
    isLoading: readonly(isLoading),
    load: loadMyVideos,
    upload: uploadFiles
  })
}

export const useMyVideoInject = () => {
  const localeContext = inject<Context>(FileSymbol)

  if (!localeContext) {
    throw new Error(`no provider found for JobSymbol useJobsProvide`)
  }

  return localeContext
}
