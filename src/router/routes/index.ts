export default [
  {
    path: "/login",
    component: () => import("@/view/login/index.vue"),
    name: "login",
  },
  {
    path: "/",
    component: () => import("@/view/home/index.vue"),
    name: "home",
  },
  {
    path: "/404",
    component: () => import("@/view/404/index.vue"),
    name: "404",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
  },
];
