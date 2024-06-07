<script setup lang="ts">
import { computed } from "vue";
import { AppRoute } from "../config";
import { useRoute } from "vue-router";

const route = useRoute();

const appRoutes = computed(() => Object.entries(AppRoute).slice(1));
</script>

<template>
  <nav class="rounded-[20px] bg-bg-nav px-5 backdrop-blur-[120px] md:w-72">
    <div
      class="mb-5 bg-divider bg-[length:100%_1px] bg-bottom bg-no-repeat py-2 text-center"
    >
      <router-link
        class="mx-auto my-2 opacity-80 transition-opacity hover:opacity-100"
        :to="AppRoute.Main.route"
        title="Home"
        ><v-icon name="md-home" scale="3" fill="#fff" animation="pulse" hover
      /></router-link>
    </div>
    <ul :v-if="appRoutes.length">
      <li
        v-for="([name, { route: localRoute, icon }], i) in appRoutes"
        :key="`nav_${name}_${i}`"
      >
        <router-link
          :class="`flex items-center rounded-2xl px-4 py-3 text-sm capitalize text-white transition-all ${localRoute === route.path ? 'bg-bg-nav--active' : 'bg-transparent opacity-80 hover:opacity-100'}`"
          active-class="active"
          :to="localRoute"
          ><span
            :class="`mr-3 flex h-7 w-7 items-center justify-center rounded-xl transition-all ${localRoute === route.path ? 'bg-nav-icon' : 'bg-bg-nav--active'}`"
            ><v-icon
              :class="`transition-all ${localRoute === route.path ? 'fill-white' : 'fill-nav-icon'} `"
              :name="icon"
          /></span>
          {{ name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.active {
  opacity: 1 !important;
  color: red;
}
</style>
