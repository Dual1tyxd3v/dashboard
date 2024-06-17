<script setup lang="ts">
import { AppRoute } from "../../config";
import { useRoute } from "vue-router";
import { useConfigStore } from "../../store";
import { getNavBackground, getDividerBackground } from "../../utils/styles";
import { computed } from "vue";
import NavItem from "./NavItem.vue";

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
        <NavItem
          v-for="[name, { route: localRoute, icon }] in activeLinks"
          :key="`nav_${name}`"
          :is-active="localRoute === route.path"
          :name="name"
          :icon="icon"
          :route="localRoute"
        />
      </transition-group>
    </ul>
  </nav>
</template>
