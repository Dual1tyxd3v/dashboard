<script setup lang="ts">
import { useConfigStore } from "../../store";
import { getBlockBackground } from "../../utils/styles";

type Props = {
  name: string;
  value: string;
};
defineProps<Props>();

const config = useConfigStore();
</script>

<template>
  <li
    class="rounded-xl px-4 py-3 [&:not(:last-child)]:mb-2"
    :style="getBlockBackground(config.Colors.block[0], config.Colors.block[1])"
  >
    <p
      class="flex items-center justify-between uppercase"
      :style="`color: ${config.Colors.miniTitle}`"
    >
      1 {{ name }} to {{ config.Currency.base }}
      <span class="text-l" :style="`color: ${config.Colors.main}`">
        {{ value }}</span
      >
    </p>
  </li>
</template>
