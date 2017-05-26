import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from  '../pages/home.vue'
import resume from '../components/resume.vue'
import basetable from '../pages/basetable.vue'
import charts from '../components/charts.vue'
import register from '../pages/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/resume',
          component: resume
        },
        {
          path: '/basetable',
          component: basetable
        },
        {
          path: '/charts',
          component: charts
        },
        {
          path: '/register',
          component: register
        }
      ]
    }
  ]
})
