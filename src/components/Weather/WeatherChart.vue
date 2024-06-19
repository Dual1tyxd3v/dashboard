<script setup lang="ts">
import { ForecastTemp } from "../../types";
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
import { computed, onMounted, onUnmounted } from "vue";
import { Line } from "vue-chartjs";
import { getChartConfig } from "../../config";
import { useConfigStore } from "../../store";
import { getChartFontSize } from "../../utils/styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
// ChartJS.defaults.font.size = 5;

const props = defineProps({
  forecastTemp: Array || null,
});

const store = useConfigStore();

const data = computed(() => {
  if (!props.forecastTemp) return null;

  const history = props.forecastTemp as ForecastTemp[];

  return {
    labels: history.map((day) => day.date),
    datasets: [
      {
        backgroundColor: store.Colors.active,
        borderColor: store.Colors.active,
        data: history.map((day) => day.average),
        tension: 0.2,
        label: "Average",
      },
      {
        backgroundColor: store.Colors.activeMedia,
        borderColor: store.Colors.activeMedia,
        data: history.map((day) => day.max),
        tension: 0.2,
        label: "Max",
      },
      {
        backgroundColor: store.Colors.chartMin,
        borderColor: store.Colors.chartMin,
        data: history.map((day) => day.min),
        tension: 0.2,
        label: "Min",
      },
    ],
  };
});

function onResizeHandler() {
  ChartJS.defaults.font.size = getChartFontSize(window.outerWidth);
}

onMounted(() => {
  ChartJS.defaults.font.size = getChartFontSize(window.outerWidth);

  window.addEventListener("resize", onResizeHandler);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResizeHandler);
});
</script>

<template>
  <template v-if="data">
    <Line
      class="max-h-52"
      responsive
      :data="data"
      :options="
        getChartConfig(store.Colors.main, `${store.Colors.gridColor}33`)
      "
    />
  </template>
</template>
