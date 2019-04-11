import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

import index from '@/page/index'
import trailingEffect from '@/page/practice/canvas/trailing-effect'
import trailingEffectYichi from '@/page/practice/canvas/trailing-effect-yichi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/trailing-effect',
      name: 'trailingEffect',
      component: trailingEffect
    },
    {
      path: '/lovexiaoyichi',
      name: 'trailingEffectYichi',
      component: trailingEffectYichi
    }
  ]
})
