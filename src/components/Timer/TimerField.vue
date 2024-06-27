<script setup lang="ts">
import { computed } from "vue";
import { useConfigStore } from "../../store";

type Props = {
  max: number;
  value: string[];
  onChangeHandler: (e: Event, index: number, max: number) => void;
  type: string;
  isActive: boolean;
};
defineProps<Props>();

const config = useConfigStore();

const getActiveColor = computed(() => config.Colors.active);

function onFocusHandler(e: Event) {
  (e.target as HTMLInputElement).select();
}
</script>

<template>
  <input
    class="mr-1 h-8 w-8 rounded-lg border-2 text-center outline-none [&:not(:first-child)]:ml-2"
    type="number"
    :style="`
        background-color: ${config.Colors.formElementsBorder}; 
        border-color: ${config.Colors.formElementsBorder};
        color: ${isActive ? config.Colors.active : config.Colors.main}`"
    :value="value[0]"
    :data-type="type"
    @input="(e) => onChangeHandler(e, 0, max)"
    @focus="onFocusHandler"
    :disabled="isActive"
  />
  <input
    class="mr-2 h-8 w-8 rounded-lg border-2 text-center outline-none"
    type="number"
    :style="`
        background-color: ${config.Colors.formElementsBorder}; 
        border-color: ${config.Colors.formElementsBorder};
        color: ${isActive ? config.Colors.active : config.Colors.main}`"
    :value="value[1]"
    :data-type="type"
    @input="(e) => onChangeHandler(e, 1, max)"
    @focus="onFocusHandler"
    :disabled="isActive"
  />
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
