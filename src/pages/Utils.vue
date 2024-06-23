<script setup lang="ts">
import UtilsHeader from "../components/Utils/UtilsHeader.vue";
import { useAppStore, useConfigStore } from "../store";
import Timer from "../components/Utils/Timer.vue";

const config = useConfigStore();
const appStore = useAppStore();

const Tabs = { Timer };
</script>

<template>
  <div class="flex-grow" :style="`color: ${config.Colors.main}`">
    <UtilsHeader />
    <component :is="Tabs[appStore.activeUtil as keyof typeof Tabs]" />
  </div>
</template>
