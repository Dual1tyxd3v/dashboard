<script setup lang="ts">
import { AppRoute } from "../config";
import { useRoute } from "vue-router";
import { useConfigStore } from "../store";
import { getNavBackground, getDividerBackground } from "../utils/styles";
import { computed } from "vue";

const store = useConfigStore();
const route = useRoute();

const activeLinks = computed(() =>
  store.NavLinks.filter((link) => link[1].visible),
);
</script>

<template>
  <nav
    class="rounded-[20px] px-5 backdrop-blur-[120px] md:w-72"
    :style="getNavBackground(store.Colors.bgNav[0], store.Colors.bgNav[1])"
  >
    <div
      class="mb-5 bg-[length:100%_1px] bg-bottom bg-no-repeat py-2 text-center"
      :style="getDividerBackground(store.Colors.divider)"
    >
      <router-link
        class="mx-auto my-2 opacity-80 transition-opacity hover:opacity-100"
        :to="AppRoute.Main.route"
        title="Home"
      >
        <v-icon
          name="md-home"
          scale="3"
          :fill="store.Colors.main || '#fff'"
          animation="pulse"
          hover
        />
      </router-link>
    </div>
    <ul :v-if="activeLinks.length">
      <transition-group name="fastlinks">
        <li
          v-for="[name, { route: localRoute, icon }] in activeLinks"
          :key="`nav_${name}`"
        >
          <router-link
            class="flex items-center rounded-2xl px-4 py-3 text-sm capitalize opacity-80 transition-all hover:opacity-100"
            :style="`
            color: ${store.Colors.main};
            ${
              localRoute === route.path
                ? `background-color: ${store.Colors.bgNavActive}; opacity: 1 !important;`
                : 'background-color: transparent;'
            }`"
            :to="localRoute"
          >
            <span
              class="transition-all' mr-3 flex h-7 w-7 items-center justify-center rounded-xl"
              :style="`background-color: ${localRoute === route.path ? store.Colors.icon : store.Colors.bgNavActive}`"
            >
              <v-icon
                :style="`fill: ${
                  localRoute === route.path
                    ? store.Colors.main
                    : store.Colors.icon
                }`"
                :name="icon"
            /></span>
            {{ name }}
          </router-link>
        </li>
      </transition-group>
    </ul>
  </nav>
</template>
