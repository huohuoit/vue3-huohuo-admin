import { createRouter, createWebHistory, Router } from "vue-router";

import exampleRouter from "./modules/example";

const routes = [exampleRouter];

// 创建路由实例
export const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
  strict: true
});

export default router;
