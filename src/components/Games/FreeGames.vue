<script setup lang="ts">
import { useAppStore, useConfigStore } from "../../store";
import { getBlockBackground } from "../../utils/styles";
import Loader from "../Loader.vue";

const config = useConfigStore();
const appStore = useAppStore();
</script>

<template>
  <section
    :style="`
      ${getBlockBackground(config.Colors.block[0], config.Colors.block[1])};
      color: ${config.Colors.main}`"
    class="relative rounded-2xl px-3 py-2 overflow-hidden"
  >
    <Loader v-if="appStore.freeGames === null" />
    <p class="mb-3 text-xl">Free Games</p>
    <p class="text-center py-2" v-if="!appStore.freeGames?.length">There is no free games at this time...</p>
    <div v-else class="flex flex-wrap justify-center">
      <a
        :href="game.url"
        v-for="game in appStore.freeGames"
        :key="game.name"
        class="group relative block overflow-hidden rounded-2xl"
      >
        <img
          loading="lazy"
          :src="game.img"
          :alt="game.name"
          class="w-60 lg:w-64 xl:w-72"
        />
        <p
          class="clip-hide-top group-hover:clip-full absolute left-0 top-0 w-full bg-black-75% text-center transition-all"
        >
          {{ game.name }}
        </p>
        <p
          class="clip-hide-bottom group-hover:clip-full absolute bottom-0 left-0 w-full bg-black-75% text-center transition-all"
        >
          {{ game.place }}
        </p>
      </a>
    </div>
  </section>
</template>
