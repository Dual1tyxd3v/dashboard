<script setup lang="ts">
import { computed } from "vue";
import { useConfigStore } from "../../store";

type Props = {
  max: number;
  value: string[];
  onChangeHandler: (e: Event, index: number, max: number) => void;
  type: string;
};
defineProps<Props>();

const config = useConfigStore();

const getActiveColor = computed(() => config.Colors.active);
</script>

<template>
  <div class="flex gap-1">
    <input
      class="h-8 w-8 rounded-lg border-2 text-center outline-none"
      type="number"
      :style="`
        background-color: ${config.Colors.formElementsBorder}; 
        border-color: ${config.Colors.formElementsBorder};
        color: ${config.Colors.main}`"
      :value="value[0]"
      :data-type="type"
      @input="(e) => onChangeHandler(e, 0, max)"
    />
    <input
      class="h-8 w-8 rounded-lg border-2 text-center outline-none"
      type="number"
      :style="`
        background-color: ${config.Colors.formElementsBorder}; 
        border-color: ${config.Colors.formElementsBorder};
        color: ${config.Colors.main}`"
      :value="value[1]"
      :data-type="type"
      @input="(e) => onChangeHandler(e, 1, max)"
    />
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input:focus {
  border-color: v-bind(getActiveColor) !important;
}
</style>
