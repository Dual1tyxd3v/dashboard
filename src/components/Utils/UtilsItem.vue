<script setup lang="ts">
import { computed } from "vue";
import { useAppStore, useConfigStore } from "../../store";

type Props = {
  name: string;
  icon: string;
};
const props = defineProps<Props>();

const config = useConfigStore();
const appStore = useAppStore();

const isActive = computed(() => appStore.activeUtil === props.name);

const getHoverColor = computed(() =>
  isActive.value ? config.Colors.active : config.Colors.activeMedia,
);
</script>

<template>
  <button
    class="my-button flex h-16 w-20 flex-col items-center justify-center rounded-2xl transition-colors xl:h-14 xl:w-16"
    :style="`background-color: ${isActive ? config.Colors.active : config.Colors.icon}`"
    :title="name"
    @click="appStore.activeUtil = name"
  >
    <v-icon class="scale-75 xl:scale-100" :name="icon" scale="1.5" />
    <span class="text-xs">{{ name }}</span>
  </button>
</template>

<style scoped>
.my-button:hover {
  background-color: v-bind(getHoverColor) !important;
}
</style>
