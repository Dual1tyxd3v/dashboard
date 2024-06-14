<script setup lang="ts">
import { useConfigStore } from "../store";

const store = useConfigStore();
</script>

<template>
  <button
    class="m-auto block rounded-xl px-4 py-2 text-sm uppercase grayscale-[0.5] transition-all hover:grayscale-0 disabled:grayscale-[1] disabled:hover:grayscale-[1]"
    :style="`background-color: ${store.Colors.icon}; color: ${store.Colors.main}`"
  >
    <slot></slot>
  </button>
</template>
