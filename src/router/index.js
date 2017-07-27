import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'
import Service from '@/views/Service'
import About from '@/views/About'
import Contract from '@/views/Contract'
import News from '@/views/News'
import Hire from '@/views/Hire'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/service',
    name: 'service',
    component: Service
  }, {
    path: '/about',
    name: 'about',
    component: About
  }, {
    path: '/news',
    name: 'news',
    component: News
  }, {
    path: '/contract',
    name: 'contract',
    component: Contract
  }, {
    path: '/hire',
    name: 'hire',
    component: Hire
  }]
})
