import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from  '../pages/home.vue'
import readme from '../components/readme.vue'
import basetable from '../pages/basetable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/readme',
          component: readme
        },
        {
          path: '/basetable',
          component: basetable
        }
      ]
    }
  ]
})
