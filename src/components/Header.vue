<script setup lang="ts">
import { useRoute } from "vue-router";
import FastLinks from "./FastLinks.vue";
import { useConfigStore } from "../store";
import { ref } from "vue";
import Options from "./Options/Options.vue";

const store = useConfigStore();

const route = useRoute();

const showOptions = ref(false);
</script>

<template>
  <Transition name="options">
    <Options v-if="showOptions" :closeOptions="() => (showOptions = false)" />
  </Transition>
  <header class="flex items-center justify-between gap-5 py-5">
    <p
      class="text-2xl font-bold capitalize"
      :style="`color: ${store.Colors.main}`"
    >
      {{ route.name }}
    </p>
    <FastLinks />
    <button
      aria-label="Config"
      title="Config"
      class="opacity-50 transition-opacity hover:opacity-100"
      @click="() => (showOptions = true)"
    >
      <v-icon
        class="scale-75 xl:scale-100"
        name="vi-file-type-config"
        scale="1.5"
        :fill="store.Colors.main"
      />
    </button>
  </header>
</template>

<style scoped>
.options-enter-from,
.options-leave-to {
  transform: translateX(100%);
}
.options-enter-active,
.options-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
