import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dad-bot',
    name: 'DadBot',
    component: () => import('@/views/DadBot.vue')
  },
  {
    path: '/mom-bot',
    name: 'MomBot',
    component: () => import('@/views/MomBot.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
