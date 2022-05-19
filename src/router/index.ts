import { createRouter, createWebHistory, Router } from "vue-router";

import globalRouter from "./modules/global";

const routes = [globalRouter];

// 创建路由实例
export const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
  strict: true
});

export default router;
