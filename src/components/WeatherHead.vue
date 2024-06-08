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
  const url = props.icon.replace("//", "https://");

  return `before:bg-[url('${url}')]`;
});
console.log(iconUrl.value);

onUnmounted(() => clearInterval(timer));
</script>

<template>
  <div class="mb-3 flex items-center justify-around">
    <div class="flex flex-col items-center justify-between">
      <p
        :class="`relative text-3xl before:absolute ${iconUrl} before:top-0 before:left-[-60%] before:h-8 before:w-8 before:bg-cover before:bg-center before:bg-no-repeat`"
      >
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
