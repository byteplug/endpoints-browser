import { createRouter, createWebHistory } from 'vue-router'
import Browser from '../views/Browser.vue'
import Api from '../views/Api.vue'
import RootView from '../views/api/RootView.vue'
import EnumView from '../views/api/EnumView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'browser',
      component: Browser
    },
    {
      path: '/api',
      name: 'api',
      component: Api,
      children: [
        {
          path: '',
          component: RootView,
        },
        {
          path: 'enum',
          component: EnumView,
        }
      ],
    }
  ]
})

export default router
