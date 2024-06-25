<script setup lang="ts">
// import MediaContent from "../components/Media/MediaContent.vue";
// import { AppStorage } from "../config";
import { useRedirect } from "../hooks/useRedirect";
import { useConfigStore } from "../store";
import { getBlockBackground } from "../utils/styles";

const config = useConfigStore();
useRedirect();
</script>

<template>
  <!-- <MediaContent :type="AppStorage.YOUTUBE" /> -->
  <p class="p-3 text-center rounded-2xl"
    :style="`color: ${config.Colors.main};${getBlockBackground(config.Colors.block[0], config.Colors.block[1])}`"
  >
    This page is not working yet
  </p>
</template>
