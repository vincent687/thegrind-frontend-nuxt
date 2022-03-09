import { computed, inject, provide, readonly, Ref, ref } from 'vue'
import { Router } from 'vue-router'

const HamburgerSymbol = Symbol()

export type Context = {
  currentHamburger: Ref<Boolean>
  change: () => void
//  redirect: (distination: string) => string
}

export const useHamurgerProvide = () => {
    const state = ref<Boolean>(false)

  const openFullHamurger = () => {
    state.value = !state.value 
  }


  provide<Context>(HamburgerSymbol, {
    currentHamburger: readonly(state),
    change: openFullHamurger,
  })
}

export const useHamburgerInject = () => {
  const hamburgerContext = inject<Context>(HamburgerSymbol)

  if (!hamburgerContext) {
    throw new Error(`no provider found for HamburgerContext useHamburgerProvide`)
  }

  return hamburgerContext
}
