import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import type { RouterOptions } from 'vue-router'
import routPages from './routerPage/page'
const routes: Array<RouteRecordRaw> = routPages


const router = createRouter({
  history: createWebHashHistory(),
  routes
} as RouterOptions)

export default router