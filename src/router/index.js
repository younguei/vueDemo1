import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/page/HelloWorld'
import MallPage from '@/components/page/MallPage.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/mallpage',
      name: 'MallPage',
      component: MallPage,
    },{
      path:'*',
      redirect:"/mallpage",
    }
  ]
})
