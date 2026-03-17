import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/calculator',
    component: () => import('@/pages/common/Calculator.vue')
  },
  {
    path: '/countdown',
    component: () => import('@/pages/common/Countdown.vue')
  },
  {
    path: '/dice',
    component: () => import('@/pages/common/Dice.vue')
  },
  {
    path: '/datecalculator',
    component: () => import('@/pages/common/DateCalculator.vue')
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
