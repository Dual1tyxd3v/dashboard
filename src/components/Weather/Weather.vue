<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Weather } from "../../types";
import WeatherChart from "../Weather/WeatherChart.vue";
import WeatherHead from "../Weather/WeatherHead.vue";
import { getWeather } from "../../api";
import Loader from "../Loader.vue";
import { useConfigStore } from "../../store";
import { getBlockBackground } from "../../utils/styles";
import Button from "../Button.vue";

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

console.log(weather.value.error);
</script>

<template>
  <div
    class="relative flex-grow overflow-hidden rounded-2xl p-4 md:min-h-[315px] md:min-w-[500px]"
    :style="`
      color: ${store.Colors.main}; 
      ${getBlockBackground(store.Colors.block[0], store.Colors.block[1])}`"
  >
    <Loader v-if="isLoading" />
    <div
      v-else-if="weather.error"
      class="flex h-full flex-col justify-center gap-4 text-center"
    >
      <p>Something went wrong<br />{{ weather.error }}</p>
      <Button class="my-0" @click="loadWeather">Try again</Button>
    </div>
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
