<script setup lang="ts">
import { Chart } from "vue3-charts";

const props = defineProps({
  history: Array || null,
});
</script>

<template>
  <Chart v-if="props.history"> </Chart>
</template>
