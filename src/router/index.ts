import { createRouter, createWebHashHistory } from "vue-router";
import basicRoutes from "./routes/index";
import type { RouteRecordRaw } from "vue-router";
console.log(basicRoutes, "basicRoutes");

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
