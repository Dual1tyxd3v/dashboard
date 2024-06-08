<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { Weather } from "../types";
import WeatherChart from "./WeatherChart.vue";
import WeatherHead from "./WeatherHead.vue";
import { getWeather } from "../api";

const container = ref();
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
  <div
    :ref="container"
    class="flex-grow rounded-2xl bg-bg-block p-4 text-white md:min-w-[500px]"
  >
    <WeatherHead
      :temp="weather.data?.temp"
      :humidity="weather.data?.humidity"
      :pressure="weather.data?.pressure"
      :city="weather.data?.city"
      :icon="weather.data?.icon"
    />
    <WeatherChart :history="weather.data?.history" />
  </div>
</template>
