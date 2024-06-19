<script setup lang="ts">
import { NewGame } from "../../types";

type Props = {
  game: NewGame;
};
defineProps<Props>();
</script>

<template>
  <a :href="game.url" class="group relative block overflow-hidden rounded-2xl">
    <img
      loading="lazy"
      :src="game.img"
      :alt="game.name"
      class="w-60 lg:w-64 xl:w-72"
    />
    <p
      class="clip-hide-top group-hover:clip-full bg-black-75% absolute left-0 top-0 w-full text-center transition-all"
    >
      {{ game.name }}
    </p>
    <p
      class="clip-hide-bottom group-hover:clip-full bg-black-75% absolute bottom-0 left-0 w-full text-center transition-all"
    >
      {{ game.place }}
    </p>
  </a>
</template>
