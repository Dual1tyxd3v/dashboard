<script setup lang="ts">
import { computed, onUnmounted, ref } from "vue";
import { getTime } from "../utils";

const props = defineProps({
  temp: Number,
  city: String,
  humidity: Number,
  pressure: Number,
  icon: String,
});
const currentTime = ref(new Date().getTime());

const timer = setInterval(() => (currentTime.value += 1000), 1000);

const temperature = computed(() => {
  if (!props.temp) return "";

  return `${props.temp > 0 ? "+" : "-"}${props.temp}`;
});

const iconUrl = computed(() => {
  if (!props.icon) return "";
  return props.icon.replace("//", "https://");
});

onUnmounted(() => clearInterval(timer));
</script>

<template>
  <div class="mb-3 flex items-center justify-around">
    <div class="flex flex-col items-center justify-between">
      <p :class="`relative text-3xl`">
        <span
          class="absolute left-[-60%] top-0 h-8 w-8 bg-cover bg-center bg-no-repeat"
          :style="`background-image: url(${iconUrl});`"
        ></span>
        {{ temperature }}
      </p>
      <div class="flex items-center gap-4 text-sm">
        <p><v-icon name="wi-humidity" scale="1.3" />{{ humidity }}%</p>
        <p><v-icon name="fa-ruler-vertical" scale="1.3" />{{ pressure }}</p>
      </div>
    </div>
    <div class="text-right text-lg">
      <p>{{ city }}</p>
      <p class="text-xl">{{ getTime(currentTime) }}</p>
    </div>
  </div>
</template>
