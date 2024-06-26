<script setup lang="ts">
import { ref, watch } from 'vue';
import { useAppStore } from "../../store";
import Loader from "../Loader.vue";

const appStore = useAppStore();

const isLoading = ref(true);

watch(
  () => appStore.activeLink,
  () => (isLoading.value = true),
);

function onLoadHandler() {
  isLoading.value = false;
}
</script>

<template>
  <Loader v-if="isLoading" />
  <iframe
    @load="onLoadHandler"
    class="flex-grow rounded-2xl"
    :src="appStore.activeLink?.url"
    frameborder="0"
  ></iframe>
</template>
