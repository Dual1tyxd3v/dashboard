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
    ? `color: ${config.Colors.active}; opacity: 1; background-color: ${config.Colors.bgNavActive}`
    : `color: ${config.Colors.main}`;
});
</script>

<template>
  <button
    class="text-normal w-full rounded-2xl capitalize opacity-80 transition-all hover:opacity-100"
    :style="getStyles"
  >
    {{ label }}
  </button>
</template>
