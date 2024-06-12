<script setup lang="ts">
import { computed } from "vue";
import { useConfigStore } from "../../store";

type Props = {
  label: string;
  isActive: boolean;
};
const props = defineProps<Props>();

const config = useConfigStore();

const getStyles = computed(() => {
  return props.isActive
    ? `color: ${config.colors.active}; opacity: 1; background-color: ${config.colors?.bgNavActive}`
    : `color: ${config.colors.main}`;
});
</script>

<template>
  <button
    class="w-full rounded-2xl text-normal capitalize opacity-80 transition-all hover:opacity-100"
    :style="getStyles"
  >
    {{ label }}
  </button>
</template>
