import { computed, inject, provide, readonly, Ref, ref } from 'vue'
import { getUser } from '../api/login'

const AccountSymbol = Symbol()
export type Data<T> = {
  pubkey: String
  info: T
}
export type Context = {
  state: Ref<State>
  isLoading: Ref<boolean>
  load: (connection: String, pubkey: String) => void
}
export type State =
  | { status: 'init' }
  | { status: 'loading' }
  | { status: 'empty' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: Data<object> }
export const useAccountProvide = () => {
  const state = ref<State>({ status: 'init' })

  const isLoading = computed(() => state.value.status === 'loading')

  const loadAccount = async (connection: String, pubkey: String) => {
    if (state.value.status === 'loading') {
      console.warn('still loading, skipping')
      return
    }

    state.value = { status: 'loading' }

    try {
      // TODO remove artificial network latency
      await new Promise((resolve) => setTimeout(resolve, 500))
      let info = {}
      await getUser({}).then((res) => {
        info = res.data
      })

      state.value =
        info !== null
          ? { status: 'success', data: { info, pubkey } }
          : { status: 'error', error: 'unable to load account' }
    } catch (error) {
      state.value = { status: 'error', error: error as string }
    }
  }

  // const airdrop = async (connection: String, pubkey: String) => {
  //   if (connection == null) {
  //     throw new Error('connection is null')
  //   }
  //   const airdropSignature = await connection.requestAirdrop(pubkey, LAMPORTS_PER_SOL)
  //   console.debug('airdropSignature', airdropSignature)
  //   await connection.confirmTransaction(airdropSignature)
  // }

  provide<Context>(AccountSymbol, {
    state: readonly(state),
    isLoading: readonly(isLoading),
    load: loadAccount,
  })
}

export const useAccountInject = () => {
  const accountContext = inject<Context>(AccountSymbol)

  if (!accountContext) {
    throw new Error(`no provider found for AccountSymbol useAccountProvide`)
  }

  return accountContext
}
