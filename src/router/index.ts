import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import mainView from "../views/mainView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:id",
    name: "main",
    component: mainView,
  },
];

const router = createRouter({
  history: createWebHistory('/wedding_yt/'),
  routes,
});

export default router;
