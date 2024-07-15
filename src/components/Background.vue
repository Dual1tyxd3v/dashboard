<script setup lang="ts">
import { onUnmounted, ref, watch } from "vue";
import { useConfigStore } from "../store";
import { getImage } from "../utils/styles";

const store = useConfigStore();
const src = ref(getImage(store.Background.images));
const isLoading = ref(true);

let timer = store.Background.timing
  ? setInterval(
      () => (src.value = getImage(store.Background.images)),
      store.Background.timing,
    )
  : null;

watch(
  () => store.Background.timing,
  (value) => {
    timer && clearInterval(timer);
    timer = value
      ? setInterval(
          () => (src.value = getImage(store.Background.images)),
          value,
        )
      : null;
  },
);

onUnmounted(() => {
  timer && clearInterval(timer);
});
</script>

<template>
  <div
    class="fixed inset-0 z-[-1] h-dvh w-dvw"
    :style="`
      background-color:${store.Background.color || '#000'}`"
  >
    <img
      :src="src"
      alt="Background"
      referrerpolicy="no-referrer"
      :class="`h-full w-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-5' : 'opacity-100'}`"
      @load="isLoading = false"
    />
  </div>
</template>
