import { store } from  '@/store/index'
import { defineNuxtPlugin } from '#app'
import MobileDetect from 'mobile-detect'

export default({ req }) => {
   

//   const md = new MobileDetect(req.headers['user-agent'])
//   const isMobile = md.phone() !== null || md.mobile() === 'UnknownMobile'
//   const isTablet = md.tablet() !== null || md.mobile() === 'UnknownTablet'
//   const isDesktop = !isMobile && !isTablet
 
  const t = true;
  const t1 = true;
  const t2 = true;
  
  
   store.commit('setDevice', {
    t,
    t1,
    t2,
    // isMobile,
    // isTablet,
    // isDesktop,
  })

}