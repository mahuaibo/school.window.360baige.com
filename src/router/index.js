import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SchoolList from '@/components/school/List'

Vue.use(Router)

export default new Router({
  routes: [{
    name: 'home',
    component: Home,
    path: '/home',
    alias: '',
    redirect: {
      name: '/school/list'
    },
    children: [{
      name: '/school/list',
      component: SchoolList,
      path: '/school/list',
      alias: 'school/list'
    }]
  }]
})
