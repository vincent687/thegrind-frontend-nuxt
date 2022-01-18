import { useAccountProvide, useAccountInject } from './account'
// import { usePostProvide, usePostInject } from './post'
import { useHamurgerProvide, useHamburgerInject } from './hamburger'
export { useAccountInject, useHamburgerInject }

export const useProvider = () => {
  useAccountProvide()
  useHamurgerProvide()
  // usePostProvide()
}
