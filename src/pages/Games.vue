<script setup lang="ts">
import { watch } from "vue";
import { useAppStore } from "../store";
import { setLocalFreeGames } from "../utils/media";

const appStore = useAppStore();

watch(
  () => appStore.freeGames,
  (newValue) => {
    if (!newValue) return;
    setLocalFreeGames(newValue);
    appStore.newfreeGamesCount = 0;
  },
  { immediate: true },
);
</script>

<template>
  <div class="flex-grow"></div>
</template>
