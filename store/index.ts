
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
    device: Object
}
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        device : {}
    },
    mutations: {
        setDevice(state, value) {
            state.device = value
          }
      }

})



