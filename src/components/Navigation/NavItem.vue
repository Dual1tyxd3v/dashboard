<script setup lang="ts">
import { useConfigStore } from "../../store";

type Props = {
  isActive: boolean;
  name: string;
  icon: string;
  route: string;
};
defineProps<Props>();

const config = useConfigStore();
</script>

<template>
  <li>
    <router-link
      class="flex items-center rounded-2xl px-4 py-3 text-sm capitalize opacity-80 transition-all hover:opacity-100"
      :style="`
            color: ${config.Colors.main};
            ${
              isActive
                ? `background-color: ${config.Colors.bgNavActive}; opacity: 1 !important;`
                : 'background-color: transparent;'
            }`"
      :to="route"
    >
      <span
        class="transition-all' mr-3 flex h-7 w-7 items-center justify-center rounded-xl"
        :style="`background-color: ${isActive ? config.Colors.icon : config.Colors.bgNavActive}`"
      >
        <v-icon
          :style="`fill: ${isActive ? config.Colors.main : config.Colors.icon}`"
          :name="icon"
      /></span>
      {{ name }}
    </router-link>
  </li>
</template>
