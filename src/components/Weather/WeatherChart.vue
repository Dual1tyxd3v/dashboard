<script setup lang="ts">
import { HistoryType } from "../../types";
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
import { getChartConfig } from "../../config";
import { useConfigStore } from "../../store";

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

const store = useConfigStore();

const data = computed(() => {
  if (!props.history) return null;

  const history = props.history as HistoryType[];

  return {
    labels: history.map((day) => day.date),
    datasets: [
      {
        backgroundColor: store.Colors.active,
        data: history.map((day) => day.temp),
        tension: 0.2,
      },
    ],
  };
});
</script>

<template>
  <template v-if="data">
    <Line
      class="max-h-52"
      responsive
      :data="data"
      :options="
        getChartConfig(
          store.Colors.active || '#fff',
          store.Colors.main || '#fff',
          store.Colors.gridColor || '#fff',
        )
      "
    />
  </template>
</template>
