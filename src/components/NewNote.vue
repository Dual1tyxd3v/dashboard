<script setup lang="ts">
import { useConfigStore } from "../store";

const store = useConfigStore();
</script>

<template>
  <div
    class="test fixed left-[50%] top-[50%] z-10 h-96 w-96 translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-2xl"
    :style="`background-image: linear-gradient(169.05deg, ${store.backgroundImage?.formWrapper[0]} 14.742%,${store.backgroundImage?.formWrapper[1]} 56.061%,${store.backgroundImage?.formWrapper[2]} 85.138%);`"
  >
    <div
      class="fixed left-[50%] top-[50%] h-96 w-96 translate-x-[-50%] translate-y-[-50%]"
      style="background-image:; backdrop-filter: blur(42px)"
    >
      qweqweqwe qwe qwe qwe qweqw
    </div>
  </div>
</template>

<style>
.test {
  border-image: linear-gradient(#f6b73c, #4d9f0c);
  /* border-color: red; */
  border-width: 4px;
  border-style: solid;
}
</style>
