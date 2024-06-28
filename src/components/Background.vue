<script setup lang="ts">
import { useConfigStore } from "../store";
import { getImage } from "../utils/styles";

const store = useConfigStore();
</script>

<template>
  <img
    :src="getImage(store.Background.images)"
    alt="Background"
    referrerpolicy="no-referrer"
    class="fixed inset-0 z-[-1] h-dvh w-dvw object-cover"
  />
</template>
