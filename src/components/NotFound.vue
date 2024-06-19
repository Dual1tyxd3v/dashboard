<script setup lang="ts">
import { useConfigStore } from "../store";
import { getBlockBackground } from "../utils/styles";

const config = useConfigStore();
</script>

<template>
  <div
    class="p-4 rounded-2xl text-center"
    :style="`
      color: ${config.Colors.main};
      ${getBlockBackground(config.Colors.block[0], config.Colors.block[1])}`"
  >
    <p>Page not found :(</p>
  </div>
</template>
