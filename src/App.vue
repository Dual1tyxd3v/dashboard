<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import Content from "./components/Content.vue";
import { useConfigStore } from "./store";

const store = useConfigStore();
</script>

<template>
  <div
    class="bg-no-repeat"
    :style="`
      background-color:${store.colors?.bgMain || '#000'}; 
      background-image: url(${store.background.main || 'none'});
      background-position: ${store.background.position[0]} ${store.background.position[1]};
      background-size: ${store.background.size};`"
  >
    <div
      class="flex h-dvh gap-5 py-2.5 pl-2.5 pr-5"
      :style="`backdrop-filter: blur(${store.background.blur || 0}px)`"
    >
      <Navigation />
      <Content></Content>
    </div>
  </div>
</template>
