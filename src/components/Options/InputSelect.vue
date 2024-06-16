<script setup lang="ts">
import { computed } from "vue";
import { useAppStore, useConfigStore } from "../../store";

type Props = {
  name: string;
  value: string;
};
defineProps<Props>();

const config = useConfigStore();
const appStore = useAppStore();

const getHoverColor = computed(() => config.Colors.active);
</script>

<template>
  <select
    class="input w-60 rounded-2xl border-2 px-3 py-1 outline-none [&:not(:last-child)]:mb-3"
    :name="name"
    :style="`
        background-color: ${config.Colors.inputBg}; 
        border-color: ${config.Colors.inputBorder};
        color: ${config.Colors.main}`"
  >
    <option
      v-for="(curr, i) in ['', ...appStore.allCurrencies]"
      :key="`${i}_${curr}`"
      :selected="value === curr"
    >
      {{ curr }}
    </option>
  </select>
</template>

<style scoped>
.input:focus {
  border-color: v-bind(getHoverColor) !important;
}
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
