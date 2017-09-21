import Vue from 'vue'
import Router from 'vue-router'
import home from  '../pages/home.vue'
import resume from '../components/resume.vue'
import basetable from '../pages/basetable.vue'
import charts from '../components/charts.vue'
import register from '../pages/register.vue'
import mainActive from '../pages/mainActive.vue'
import login from '../pages/login.vue'
import markdown from '../pages/markdown.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/home/',
          redirect: '/home/resume',
          component: resume,
          children: [{
            path: '/home/resume/',
          }]
        },
        {
          path: '/home/basetable',
          component: basetable
        },
        {
          path: '/home/charts',
          component: charts
        },
        {
          path: '/home/register',
          component: register
        },
        {
          path: '/home/mainActive',
          component: mainActive
        },
        {
          path: '/home/markdown',
          component: markdown
        }
      ]
    },
    {
      path: '/',
      component: login
    }
  ]
})
