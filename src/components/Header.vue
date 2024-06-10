<script setup lang="ts">
import { useRoute } from "vue-router";
import FastLinks from "./FastLinks.vue";
import { useAppStore, useConfigStore } from "../store";

const store = useConfigStore();
const appStore = useAppStore();
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
          appStore.youtube = appStore.youtube.length
            ? []
            : [
                {
                  url: 'https://www.youtube.com/c/RecrentChannel/videos',
                  label: '@@@@@@@@@@@@@@@',
                },
              ];
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
