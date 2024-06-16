<script setup lang="ts">
import { computed } from "vue";
import { useConfigStore } from "../../store";

type Props = {
  name: string;
};
defineProps<Props>();

const model = defineModel();

const config = useConfigStore();

const getHoverColor = computed(() => config.Colors.active);
</script>

<template>
  <input
    class="input m-0 h-9 w-44 overflow-hidden rounded-2xl border-2 p-0 outline-none"
    type="color"
    :name="name"
    v-model="model"
  />
</template>

<style scoped>
.input:focus {
  border-color: v-bind(getHoverColor);
}
</style>
