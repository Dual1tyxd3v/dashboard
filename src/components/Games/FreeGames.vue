<script setup lang="ts">
import { useAppStore, useConfigStore } from "../../store";
import { getBlockBackground } from "../../utils/styles";
import Loader from "../Loader.vue";
import FreeGame from "./FreeGame.vue";

const config = useConfigStore();
const appStore = useAppStore();
</script>

<template>
  <section
    :style="`
      ${getBlockBackground(config.Colors.block[0], config.Colors.block[1])};
      color: ${config.Colors.main}`"
    class="relative overflow-hidden rounded-2xl px-3 py-2"
  >
    <Loader v-if="appStore.freeGames === null" />
    <p class="mb-3 text-xl">Free Games</p>
    <p class="py-2 text-center" v-if="!appStore.freeGames?.length">
      There is no free games at this time...
    </p>
    <div v-else class="flex flex-wrap justify-center gap-3">
      <FreeGame
        v-for="game in appStore.freeGames"
        :key="game.name"
        :game="game"
      />
    </div>
  </section>
</template>
