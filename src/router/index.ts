import { createRouter, createWebHistory, Router } from "vue-router";

import remaining from "./modules/remaining";

const routes = [remaining];

// 创建路由实例
export const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
  strict: true
});

export default router;
