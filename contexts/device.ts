import { computed, inject, provide, readonly, Ref, ref } from 'vue'
import { Router } from 'vue-router'
import { isMobile } from '~~/utils/global'

const DeviceSymbol = Symbol()

export type Context = {
  isMobile: Ref<Boolean>,
  // isTablet: Ref<Boolean>,
  // isDesktop: Ref<Boolean>,
  setDevice: () => void
}

export const useDeviceProvide = () => {
  const mobileState = ref<Boolean>(false)
  const tabletState = ref<Boolean>(false)
  const desktopState = ref<Boolean>(true)

  const setDevice = () => {
    debugger
    mobileState.value = isMobile()
    // tabletState.value = isTablet,
    // desktopState.value = isDesktop
  }


  provide<Context>(DeviceSymbol, {
    isMobile: readonly(mobileState),
    // isTablet: readonly(tabletState),
    // isDesktop: readonly(desktopState),
    setDevice: setDevice ,
  })
}

export const useDeviceInject = () => {
  const deviceContext = inject<Context>(DeviceSymbol)

  if (!deviceContext) {
    throw new Error(`no provider found for deviceContext useDeviceProvide`)
  }

  return deviceContext
}
