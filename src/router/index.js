import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List/'
import Content from '@/components/Content'
import Fragment from 'vue-fragment'

Vue.use(Fragment.Plugin)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'List',
      component: List
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    }
  ]
})
