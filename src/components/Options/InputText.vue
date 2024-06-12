<script setup lang="ts">
import { computed } from "vue";
import { useConfigStore } from "../../store";

type Props = {
  name: string;
  id?: string;
  type: "text" | "number";
};
defineProps<Props>();

const model = defineModel();

const config = useConfigStore();

const getHoverColor = computed(() => config.Colors.active);
</script>

<template>
  <input
    :type="type"
    class="input w-60 rounded-2xl border-2 px-3 py-1 outline-none"
    :name="name"
    :id="id && id"
    v-model="model"
    :style="`
        background-color: ${config.Colors.inputBg}; 
        border-color: ${config.Colors.inputBorder};
        color: ${config.Colors.main}`"
  />
</template>

<style scoped>
.input:focus {
  border-color: v-bind(getHoverColor) !important;
}
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
