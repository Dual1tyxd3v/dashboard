<script setup lang="ts">
import { useConfigStore } from "../../store";

const config = useConfigStore();
</script>

<template>
  <p
    class="text-center text-sm italic [&:not(:last-child)]:mb-2"
    :style="`color: ${config.Colors.miniTitle}`"
  >
    (<slot></slot>)
  </p>
</template>
