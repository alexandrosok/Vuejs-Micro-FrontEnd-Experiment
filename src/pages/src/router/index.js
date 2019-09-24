import Vue from 'vue'
import Router from 'vue-router'
import PageContainer from '@/components/PageContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page1',
      name: 'PageContainer',
      component: PageContainer
    }
  ]
})
