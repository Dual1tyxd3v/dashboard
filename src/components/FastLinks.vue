<script setup lang="ts">
import { useConfigStore } from "../store";
import { getBlockBackground } from "../utils/styles";

const store = useConfigStore();
</script>

<template>
  <ul
    class="bg-bg-block flex flex-grow items-center justify-evenly rounded-2xl"
    :style="getBlockBackground(store.Colors.block[0], store.Colors.block[1])"
  >
    <li
      class="py-2"
      v-for="({ name, icon, url, color }, i) in store.FastLinks"
      :key="`link_${name}_${i}`"
    >
      <a
        :title="name"
        :href="url"
        class="flex h-7 w-7 items-center justify-center rounded-lg p-2 grayscale transition hover:scale-110 hover:grayscale-0"
        :style="`background-color: ${color}; color: ${store.Colors.main}`"
      >
        <span v-if="!icon">{{ name[0] }}</span>
        <v-icon v-if="icon" :name="icon" scale="1.3" />
      </a>
    </li>
  </ul>
</template>
