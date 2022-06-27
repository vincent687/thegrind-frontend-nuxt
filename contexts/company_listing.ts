import { Ref, ref, computed, inject, provide, readonly } from 'vue'
import { Company } from '~~/model/company'
import { FindCompanysParams } from '~~/model/query_schema'
import { getCompanys } from '../api/company'

const CompanySymbol = Symbol()

export type Context = {
  state: Ref<State>
  isLoading: Ref<boolean>
  load: (filter: FindCompanysParams) => Promise<Company[]>
}

export type State =
  | { status: 'init' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: Company[]; total: number }

export const useCompanysProvide = () => {
  const companysCache = ref<Company[]>([])
  const pageCache = ref(1)

  const isLoading = computed(() => state.value.status === 'loading')

  //const state = ref<State>({ status: 'init' })
  const state = useState<State>('companyState', () => {
    return { status: 'init' }
  })

  const loadCompanys = async (params: FindCompanysParams) => {
    if (state.value.status === 'loading') {
      console.warn('still loading, skipping')
      return []
    }
    state.value = { status: 'loading' }

    try {
      // TODO remove artificial network latency
      await new Promise((resolve) => setTimeout(resolve, 2000))
      let info = {}

      await getCompanys(params).then((res) => {
        const companys: Company[] = res.data.data as Company[]
        //const companys: Company[] =  res.data.data.companys as Company[]

        state.value =
          info !== null
            ? // ? { status: 'success', data: companys , total: res.data.data.total }
              { status: 'success', data: companys, total: res.data.meta.total }
            : { status: 'error', error: 'unable to load account' }

        return companys
      })
    } catch (error) {
      state.value = { status: 'error', error: error as string }

      return []
    }
  }

  provide<Context>(CompanySymbol, {
    state: state,
    isLoading: readonly(isLoading),
    load: loadCompanys,
  })
}

export const useCompanysInject = () => {
  const localeContext = inject<Context>(CompanySymbol)

  if (!localeContext) {
    throw new Error(`no provider found for JobSymbol useJobsProvide`)
  }

  return localeContext
}
