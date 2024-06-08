<script setup lang="ts">
import { HistoryType } from "../types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { computed } from "vue";
import { Line } from "vue-chartjs";
import { ChartConfig } from "../config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const props = defineProps({
  history: Array || null,
});

const data = computed(() => {
  if (!props.history) return null;

  const history = props.history as HistoryType[];

  return {
    labels: history.map((day) => day.date),
    datasets: [
      {
        backgroundColor: "rgb(44, 217, 255)",
        data: history.map((day) => day.temp),
        tension: 0.2,
      },
    ],
  };
});
</script>

<template>
  <template v-if="data">
    <Line class="max-h-52" responsive :data="data" :options="ChartConfig" />
  </template>
</template>
