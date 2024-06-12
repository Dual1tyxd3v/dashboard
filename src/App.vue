<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import Content from "./components/Content.vue";
import { useConfigStore } from "./store";
import { getImage } from "./utils/styles";

const store = useConfigStore();
</script>

<template>
  <div
    class="bg-center bg-no-repeat"
    :style="`
      background-color:${store.Background.color || '#000'}; 
      background-image: url(${getImage(store.Background.images) || 'none'});
      background-size: ${store.Background.size};`"
  >
    <div
      class="flex h-dvh gap-5 py-2.5 pl-2.5 pr-5"
      :style="`backdrop-filter: blur(${store.Background.blur || 0}px)`"
    >
      <Navigation />
      <Content></Content>
    </div>
  </div>
</template>
