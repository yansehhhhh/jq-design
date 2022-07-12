import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "首页",
      show: true,
    },
  },
  {
    path: "/component",
    name: "component",
    component: () => import("@/views/component/index.vue"),
    redirect: "/component/button",
    meta: {
      title: "组件",
      show: true,
    },
    children: [
      {
        path: "/component/button",
        name: "button",
        component: () => import("@/views/component/button.vue"),
        meta: {
          title: "按钮",
          show: false,
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/",
    meta: {
      show: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
