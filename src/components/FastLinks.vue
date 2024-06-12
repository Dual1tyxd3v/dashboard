<script setup lang="ts">
import { useConfigStore } from "../store";

const store = useConfigStore();
</script>

<template>
  <ul
    class="bg-bg-block flex flex-grow items-center justify-evenly rounded-2xl"
    :style="`background-image: linear-gradient(175.70deg, ${store.colors.block[0]} 12.226%,${store.colors.block[1]} 113.851%)`"
  >
    <li
      class="py-2"
      v-for="({ name, icon, url, color }, i) in store.fastLinks"
      :key="`link_${name}_${i}`"
    >
      <a
        :title="name"
        :href="url"
        class="flex h-7 w-7 items-center justify-center rounded-lg p-2 grayscale transition hover:scale-110 hover:grayscale-0"
        :style="`background-color: ${color}; color: ${store.colors?.main}`"
      >
        <span v-if="!icon">{{ name[0] }}</span>
        <v-icon v-if="icon" :name="icon" scale="1.3" />
      </a>
    </li>
  </ul>
</template>
