<script setup lang="ts">
import { ref } from "vue";
import { useConfigStore } from "../store";
import { getImage } from "../utils/styles";

const store = useConfigStore();

const isLoading = ref(true);
</script>

<template>
  <div
    class="fixed inset-0 z-[-1] h-dvh w-dvw"
    :style="`
      background-color:${store.Background.color || '#000'}`"
  >
    <img
      :src="getImage(store.Background.images)"
      alt="Background"
      referrerpolicy="no-referrer"
      :class="`h-full w-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`"
      @load="isLoading = false"
    />
  </div>
</template>
