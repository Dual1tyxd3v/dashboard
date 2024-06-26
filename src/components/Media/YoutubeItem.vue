<script setup lang="ts">
import { computed } from "vue";
import { useConfigStore } from "../../store";
import { YoutubeItem } from "../../types";
import { getBlockBackground } from "../../utils/styles";

type Props = {
  video: YoutubeItem;
};
defineProps<Props>();

const config = useConfigStore();

const getActiveColor = computed(() => config.Colors.active);
</script>

<template>
  <div
    class="card w-64 relative overflow-hidden rounded-2xl p-2 text-sm transition-shadow duration-300 lg:w-72"
    :style="getBlockBackground(config.Colors.block[0], config.Colors.block[1])"
  >
    <iframe
      class="mb-2 h-full w-full rounded-2xl"
      :src="video.url"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      loading="lazy"
    ></iframe>
    <p class="transition-colors">{{ video.title }}</p>
    <p class="text-right transition-colors">
      {{ video.date || "Not released yet" }}
    </p>
  </div>
</template>

<style scoped>
.card:hover p {
  color: v-bind(getActiveColor);
}
.card:hover {
  box-shadow: 0 10px 20px v-bind(getActiveColor);
}
</style>
