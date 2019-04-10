import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import TrailingEffect from '@/page/practice/canvas/trailing-effect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/trailing-effect',
      name: 'TrailingEffect',
      component: TrailingEffect
    }
  ]
})
