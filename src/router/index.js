import Vue from 'vue'
import Router from 'vue-router'
import Notification from '@/components/Notification'
import LiuBag from '@/components/LiuBag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Notification',
      component: Notification
    },
    {
      path: '/liubag',
      name: 'LiuBag',
      component: LiuBag
    },
  ]
})
