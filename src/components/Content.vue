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
    <router-view v-slot="{ Component }">
      <Transition name="route" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style scoped>
.route-enter-from {
  transform: translateY(-100%);
  position: absolute;
}
.route-leave-to {
  transform: translate(100%, 100%) rotateZ(90deg);
  position: absolute;
}
.route-enter-active,
.route-leave-active {
  transition: transform 0.3s cubic-bezier(0.8, 0, 0.29, 0.99);
}
</style>
