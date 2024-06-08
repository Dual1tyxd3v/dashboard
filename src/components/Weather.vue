<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { Weather } from "../types";
import WeatherChart from "./WeatherChart.vue";
import WeatherHead from "./WeatherHead.vue";
import { getWeather } from "../api";
import Loader from "./Loader.vue";

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
});
</script>

<template>
  <div
    class="relative flex-grow overflow-hidden rounded-2xl bg-bg-block p-4 text-white md:min-h-[315px] md:min-w-[500px]"
  >
    <Loader v-if="weather.isLoading" />
    <template v-else>
      <WeatherHead
        :temp="weather.data?.temp"
        :humidity="weather.data?.humidity"
        :pressure="weather.data?.pressure"
        :city="weather.data?.city"
        :icon="weather.data?.icon"
      />
      <WeatherChart :history="weather.data?.history" />
    </template>
  </div>
</template>
