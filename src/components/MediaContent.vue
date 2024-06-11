<script setup lang="ts">
import { ref, watch } from "vue";
import Loader from "./Loader.vue";
import MediaContentHeader from "./MediaContentHeader.vue";
import { AppStorage } from "../config";
import { useAppStore } from "../store";

type Props = {
  type: AppStorage;
};
const props = defineProps<Props>();

const appStore = useAppStore();

const isLoading = ref(true);

function loadH() {
  isLoading.value = false;
}

watch(
  () => appStore.activeLink,
  () => (isLoading.value = true),
);
</script>

<template>
  <div class="flex h-full flex-col p-1">
    <MediaContentHeader :type="props.type" />
    <div
      v-if="appStore.activeLink"
      class="relative flex flex-grow overflow-hidden rounded-2xl"
    >
      <Loader v-if="isLoading" />
      <iframe
        @load="loadH"
        class="flex-grow rounded-2xl"
        :src="appStore.activeLink.url"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>
