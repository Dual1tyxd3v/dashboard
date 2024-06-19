<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Weather } from "../../types";
import WeatherChart from "../Weather/WeatherChart.vue";
import WeatherHead from "../Weather/WeatherHead.vue";
import { getWeather } from "../../api";
import Loader from "../Loader.vue";
import { useConfigStore } from "../../store";
import { getBlockBackground } from "../../utils/styles";
import Error from "../Error.vue";

const store = useConfigStore();

const weather = ref<{
  data: null | Weather;
  error: string;
}>({ data: null, error: "" });
const isLoading = ref(false);

async function loadWeather() {
  isLoading.value = true;
  const data = await getWeather();
  isLoading.value = false;

  weather.value = data;
}

onMounted(async () => {
  loadWeather();
});
</script>

<template>
  <div
    class="relative mb-3 flex-grow overflow-hidden rounded-2xl p-4 xl:mb-0 xl:min-h-[315px] xl:min-w-[500px]"
    :style="`
      color: ${store.Colors.main}; 
      ${getBlockBackground(store.Colors.block[0], store.Colors.block[1])}`"
  >
    <Loader v-if="isLoading" />
    <Error
      v-else-if="weather.error || !weather.data"
      :error="weather.error"
      :reload="() => loadWeather"
    />
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
