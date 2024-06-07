<script setup lang="ts">
import { useRoute } from "vue-router";
import FastLinks from "./FastLinks.vue";

const route = useRoute();
</script>

<template>
  <header class="flex items-center justify-between gap-5 py-5">
    <p class="text-2xl font-bold capitalize text-white">{{ route.name }}</p>
    <FastLinks />
    <button
      aria-label="Config"
      title="Config"
      class="opacity-50 transition-opacity hover:opacity-100"
    >
      <v-icon name="vi-file-type-config" scale="1.5" fill="#fff" />
    </button>
  </header>
</template>
