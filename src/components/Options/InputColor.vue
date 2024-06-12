<script setup lang="ts">
import { computed } from "vue";
import { useConfigStore } from "../../store";

type Props = {
  name: string;
  id: string;
};
defineProps<Props>();

const model = defineModel();

const config = useConfigStore();

const getHoverColor = computed(() => config.Colors.active);
</script>

<template>
  <input
    class="input m-0 h-9 w-60 overflow-hidden rounded-2xl border-2 p-0 outline-none"
    type="color"
    :name="name"
    :id="id"
    v-model="model"
  />
</template>

<style scoped>
.input:focus {
  border-color: v-bind(getHoverColor);
}
</style>
