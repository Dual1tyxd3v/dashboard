<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { Weather } from "../types";
import WeatherChart from "./WeatherChart.vue";
import WeatherHead from "./WeatherHead.vue";
import { getWeather } from "../api";

const weather = reactive<{
  isLoading: boolean;
  data: null | Weather;
}>({ isLoading: true, data: null });

onMounted(async () => {
  const { data } = await getWeather();
  weather.isLoading = false;
  if (data) {
    weather.data = data;
  }
  // console.log(isLoading);
});
</script>

<template>
  <div class="flex-grow rounded-2xl bg-bg-block p-4 text-white">
    <WeatherHead
      :temp="weather.data?.temp"
      :humidity="weather.data?.humidity"
      :pressure="weather.data?.pressure"
      :city="weather.data?.city"
    />
    <!-- <div class="chart"></div> -->
    <WeatherChart :history="weather.data?.history" />
  </div>
</template>
