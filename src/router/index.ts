import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/labs',
      children: [
        {
          path: 'location-recommendation',
          name: 'location-recommendation',
          component: () => import('../views/labs/RecommendationsView.vue'),
        },
      ],
    },
    {
      path: '/labs',
      children: [
        {
          path: 'market-success',
          name: 'market-success',
          component: () => import('../views/labs/MarketSuccessView.vue'),
        },
      ],
    },
  ],
});

export default router;