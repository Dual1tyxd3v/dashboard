import { createRouter, createWebHashHistory } from "vue-router";
import { AppRoute } from "./config";
import Main from "./pages/Main.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: AppRoute.Main,
      name: "main",
      component: Main,
    },
  ],
});
