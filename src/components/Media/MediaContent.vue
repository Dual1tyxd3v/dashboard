<script setup lang="ts">
import MediaContentHeader from "../Media/MediaContentHeader.vue";
import { AppStorage } from "../../config";
import { useAppStore } from "../../store";
import Music from "./Music.vue";
import Youtube from "./Youtube.vue";
import { useRoute } from "vue-router";

type Props = {
  type: AppStorage;
};
defineProps<Props>();

const appStore = useAppStore();
const route = useRoute();

const Tabs = { music: Music, youtube: Youtube };
</script>

<template>
  <section class="flex h-full flex-col p-1 overflow-hidden">
    <MediaContentHeader :type="type" />
    <div
      v-if="appStore.activeLink"
      class="relative flex flex-grow overflow-hidden rounded-2xl"
    >
      <component :is="Tabs[route.name as keyof typeof Tabs]" />
    </div>
  </section>
</template>
