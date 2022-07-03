import { createRouter, createWebHistory } from 'vue-router'

import Search  from '@/views/Search.vue'
import Browser from '@/views/Browser.vue'

import HomeView        from '@/views/HomeView.vue'
import RecordsView     from '@/views/RecordsView.vue'
import CollectionsView from '@/views/CollectionsView.vue'
import CollectionView  from '@/views/CollectionView.vue'
import EndpointsView   from '@/views/EndpointsView.vue'

import EndpointView from '@/views/EndpointView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/',
      name: 'browser',
      component: Browser,
      children: [
        {
          path: '',
          component: HomeView,
        },
        {
          path: 'records',
          component: RecordsView,
        },
        {
          path: 'collections',
          component: CollectionsView,
        },
        {
          path: 'collection/:name',
          component: CollectionView,
        },
        {
          path: 'endpoints',
          component: EndpointsView,
        },
        {
          name: 'endpoint',
          path: 'endpoints/:path',
          component: EndpointView
        },
        {
          name: 'collection-endpoint',
          path: 'collections/:name/:path',
          component: EndpointView
        }
      ],
    }
  ]
})

export default router
