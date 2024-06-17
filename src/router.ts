import { createRouter, createWebHistory } from "vue-router";
import { AppRoute } from "./config";
import Main from "./pages/Main.vue";
import Youtube from "./pages/Youtube.vue";
import Music from "./pages/Music.vue";
import { useConfigStore } from "./store";

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
      component: Youtube,
    },
    {
      path: AppRoute.Music.route,
      name: "music",
      component: Music,
    },
  ],
});
