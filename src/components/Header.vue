<script setup lang="ts">
import { useRoute } from "vue-router";
import FastLinks from "./FastLinks.vue";
import { useConfigStore } from "../store";

const store = useConfigStore();
const route = useRoute();
</script>

<template>
  <header class="flex items-center justify-between gap-5 py-5">
    <p
      class="text-2xl font-bold capitalize"
      :style="`color: ${store.colors?.main}`"
    >
      {{ route.name }}
    </p>
    <FastLinks />
    <button
      aria-label="Config"
      title="Config"
      class="opacity-50 transition-opacity hover:opacity-100"
      @click="
        () => {
          if (!store.colors) return;
          store.colors.active = 'green';
        }
      "
    >
      <v-icon
        name="vi-file-type-config"
        scale="1.5"
        :fill="store.colors?.main"
      />
    </button>
  </header>
</template>
