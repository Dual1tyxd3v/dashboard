<script setup lang="ts">
import WeatherHead from "./WeatherHead.vue";
import { reactive } from "vue";

const history = reactive({ isLoading: false, data: null });
console.log(history);
/* const isLoading = computed(() =>
  currentWeather.isLoading || history.isLoading ? true : false,
); */
</script>

<template>
  <div class="flex-grow p-4 rounded-2xl bg-bg-block text-white">
    <WeatherHead />
    <div class="chart"></div>
  </div>
</template>
