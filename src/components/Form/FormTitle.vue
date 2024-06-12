<script setup lang="ts">
import { useConfigStore } from "../../store";

const store = useConfigStore();
</script>

<template>
  <h3
    class="mb-4 bg-[length:100%_1px] bg-bottom bg-no-repeat pb-2 text-center text-2xl"
    :style="`background-image: linear-gradient(to right, transparent, ${store.colors.divider}, transparent);`"
  >
    <slot></slot>
  </h3>
</template>
