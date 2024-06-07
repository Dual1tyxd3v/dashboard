import { createRouter, createWebHistory } from "vue-router";
import { AppRoute } from "./config";
import Main from "./pages/Main.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: AppRoute.Main.route,
      name: "main",
      component: Main,
    },
  ],
});
