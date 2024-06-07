<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from "vue";
import { Weather } from "../types";
import { getTime } from "../utils";
import { getWeather } from "../api";

const currentWeather = reactive<{
  isLoading: boolean;
  data: null | Weather;
}>({ isLoading: true, data: null });
const currentTime = ref(new Date().getTime());

const timer = setInterval(() => (currentTime.value += 1000), 1000);

const temperature = computed(() => {
  if (!currentWeather.data) return "";

  return `${currentWeather.data.temp > 0 ? "+" : "-"}${currentWeather.data.temp}`;
});

onMounted(async () => {
  const { data } = await getWeather();
  currentWeather.isLoading = false;
  if (data) {
    currentWeather.data = data;
  }
  // console.log(isLoading);
});

onUnmounted(() => clearInterval(timer));
</script>

<template>
  <div class="flex items-center justify-around">
    <div class="flex flex-col items-center justify-between">
      <p class="text-3xl">{{ temperature }}</p>
      <div class="flex items-center gap-4 text-sm">
        <p>
          <v-icon name="wi-humidity" scale="1.3" />{{
            currentWeather.data?.humidity
          }}%
        </p>
        <p>
          <v-icon name="fa-ruler-vertical" scale="1.3" />{{
            currentWeather.data?.pressure
          }}
        </p>
      </div>
    </div>
    <div class="text-right text-lg">
      <p>{{ currentWeather.data?.city }}</p>
      <p class="text-xl">{{ getTime(currentTime) }}</p>
    </div>
  </div>
</template>
