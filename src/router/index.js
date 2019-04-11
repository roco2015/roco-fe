import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import TrailingEffect from '@/page/practice/canvas/trailing-effect'
import TrailingEffectYichi from '@/page/practice/canvas/trailing-effect-yichi'

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
    },
    {
      path: '/lovexiaoyichi',
      name: 'TrailingEffectYichi',
      component: TrailingEffectYichi
    }
  ]
})
