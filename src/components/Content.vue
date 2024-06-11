<script setup lang="ts">
import { useRoute } from "vue-router";
import Header from "./Header.vue";
import { watch } from "vue";
import { useAppStore } from "../store";

const route = useRoute();
const appStore = useAppStore();

watch(
  () => route.path,
  () => {
    appStore.activeLink = null;
  },
);
</script>

<template>
  <div class="flex flex-grow flex-col overflow-auto">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
