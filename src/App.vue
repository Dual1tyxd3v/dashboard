<script setup lang="ts">
import Navigation from "./components/Navigation/Navigation.vue";
import Content from "./components/Content.vue";
import { useConfigStore, useAppStore } from "./store";
import { computed, onMounted, ref } from "vue";
import { getFreeGames } from "./api";
import Message from "./components/Message.vue";
import Background from "./components/Background.vue";

const store = useConfigStore();
const appStore = useAppStore();

const getScrollBarColor = computed(() => store.Colors.icon);
const getScrollBarActiveColor = computed(() => store.Colors.active);

const message = ref("");

onMounted(async () => {
  const resp = await getFreeGames();
  message.value = resp.error;

  if (!resp.data) return;

  appStore.updateFreeGames(resp.data);
});
</script>

<template>
  <Message v-if="message" :message="message" :onClick="() => (message = '')" />
  <Background />
  <div
    class="bg-center bg-no-repeat"
    referrer-policy="no-referrer"
  >
    <div
      class="flex h-dvh gap-5 py-2.5 pl-2.5 pr-5"
      :style="`backdrop-filter: blur(${store.Background.blur || 0}px)`"
    >
      <Navigation />
      <Content></Content>
    </div>
  </div>
</template>

<style>
::-webkit-scrollbar-thumb {
  background-color: v-bind(getScrollBarColor);
  cursor: pointer;
}
::-webkit-scrollbar-thumb:hover {
  background-color: v-bind(getScrollBarActiveColor);
}
</style>
