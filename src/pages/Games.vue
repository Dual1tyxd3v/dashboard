<script setup lang="ts">
import { watch } from "vue";
import { useAppStore } from "../store";
import { setLocalFreeGames } from "../utils/media";
import FreeGames from "../components/Games/FreeGames.vue";

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
  <div class="flex-grow">
    <FreeGames />
  </div>
</template>
