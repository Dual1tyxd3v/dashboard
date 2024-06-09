<script setup lang="ts">
import { useConfigStore } from "../store";

const store = useConfigStore();
</script>

<template>
  <button
    class="m-auto block rounded-xl px-4 py-2 text-sm uppercase grayscale-[0.5] transition-all hover:grayscale-0"
    :style="`background-color: ${store.colors.icon}`"
  >
    <slot></slot>
  </button>
</template>
