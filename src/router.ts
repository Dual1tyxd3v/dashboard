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
    {
      path: AppRoute.YouTube.route,
      name: "youtube",
      component: () => import("./pages/Youtube.vue"),
    },
    {
      path: AppRoute.Music.route,
      name: "music",
      component: () => import("./pages/Music.vue"),
    },
    {
      path: AppRoute.Games.route,
      name: "games",
      component: () => import("./pages/Games.vue"),
    },
  ],
});
