<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import Loader from "../Loader.vue";
import { YoutubeData } from "../../types";
import { useAppStore, useConfigStore } from "../../store";
import { getYoutubeVideos } from "../../api";
import Error from "../Error.vue";
import { getBlockBackground } from "../../utils/styles";
import YoutubeItem from "./YoutubeItem.vue";

const appStore = useAppStore();
const config = useConfigStore();

const isLoading = ref(false);
const data = ref<{ data: YoutubeData; error: string }>({ data: [], error: "" });

async function getVideos() {
  if (!appStore.activeLink) return;
  isLoading.value = true;

  const resp = await getYoutubeVideos(appStore.activeLink.url);
  isLoading.value = false;

  data.value = resp;
}

watch(
  () => appStore.activeLink,
  () => getVideos(),
);

onMounted(async () => {
  getVideos();
});
</script>

<template>
  <Loader v-if="isLoading" />
  <div
    v-else
    class="flex flex-grow flex-wrap items-start gap-4 justify-center overflow-auto p-3"
    :style="`
      ${getBlockBackground(config.Colors.block[0], config.Colors.block[1])};
      color: ${config.Colors.main}`"
  >
    <Error v-if="data.error" :error="data.error" :reload="getVideos" />
    <YoutubeItem
      v-else
      v-for="video in data.data"
      :key="video.title"
      :video="video"
    />
  </div>
</template>
