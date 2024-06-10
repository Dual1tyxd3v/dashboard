<script setup lang="ts">
import { ref } from "vue";
import Loader from "./Loader.vue";

const isLoading = ref(true);

function loadH() {
  isLoading.value = false;
}
</script>

<template>
  <div class="relative flex h-full flex-col">
    <Loader v-if="isLoading" />
    <iframe
      @load="loadH"
      class="flex-grow"
      src="https://open.spotify.com/embed/playlist/30a3BmF0CtcUU0mxpv2zpD?utm_source=generator"
      frameborder="0"
    ></iframe>
  </div>
</template>
