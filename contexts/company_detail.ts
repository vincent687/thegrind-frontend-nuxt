import { Ref, ref, computed, inject, provide, readonly } from 'vue'
import { getCompany } from '~~/api/company'
import { Company } from '~~/model/company'
import { FindCompanyParams } from '~~/model/query_chema'

const CompanySymbol = Symbol()



export type Context = {
    state: Ref<State>
    isLoading: Ref<boolean>
    load: (filter: FindCompanyParams) => Promise<Company>
}

export type State =
  | { status: 'init' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: Company; total: number }



export const useCompanyProvide = () => {
  const companyCache = ref<Company>()

  const isLoading = computed(() => state.value.status === 'loading')

  const state = ref<State>({ status: 'init' })

  const loadCompany = async (params: FindCompanyParams) => {

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
        await getCompany(params.id).then((res) => {
          debugger
          const company: Company =  res.data.data as Company
          companyCache.value = {...company}

          state.value =
          info !== null
            ? { status: 'success', data: companyCache.value , total: res.data.data.total }
            : { status: 'error', error: 'unable to load account' }

            return company
        })
  
      } catch (error) {
        state.value = { status: 'error', error: error as string }
        return null
      }    
    
  }
  

  provide<Context>(CompanySymbol, {
    state: state,
    isLoading: readonly(isLoading),
    load: loadCompany,
  })
}

export const useCompanyInject = () => {
  const localeContext = inject<Context>(CompanySymbol)

  if (!localeContext) {
    throw new Error(`no provider found for CompanySymbol useCompanyProvide`)
  }

  return localeContext
}
