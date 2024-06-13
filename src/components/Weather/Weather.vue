<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { Weather } from "../../types";
import WeatherChart from "../Weather/WeatherChart.vue";
import WeatherHead from "../Weather/WeatherHead.vue";
import { getWeather } from "../../api";
import Loader from "../Loader.vue";
import { useConfigStore } from "../../store";

const store = useConfigStore();

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
    class="relative flex-grow overflow-hidden rounded-2xl p-4 md:min-h-[315px] md:min-w-[500px]"
    :style="`
      color: ${store.Colors.main}; 
      background-image: linear-gradient(175.70deg, ${store.Colors.block[0]} 12.226%,${store.Colors.block[1]} 113.851%)`"
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
      <WeatherChart :forecastTemp="weather.data?.forecastTemp" />
    </template>
  </div>
</template>
