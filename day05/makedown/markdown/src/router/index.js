import Vue from 'vue'
import Router from 'vue-router'
// 1、在components中写好组件后，import进来
import Vmain from '@/components/Vmain'
import Vnote from '@/components/Vnote'

Vue.use(Router)

export default new Router({
// 2、写好路由，即URL与之对应的组件，---
// 3、找一个路由出口---App.vue中
  routes: [
    {
      path: '/',
      name: 'main',
      component: Vmain
    },
    {
      path: '/note',
      name: 'main',
      component: Vnote
    },
    
  ]
})
