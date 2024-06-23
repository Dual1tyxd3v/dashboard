<script setup lang="ts">
import UtilsHeader from "../components/Utils/UtilsHeader.vue";
import { useConfigStore } from "../store";

const config = useConfigStore();
</script>

<template>
  <div class="flex-grow" :style="`color: ${config.Colors.main}`">
    <UtilsHeader />
    <div class="content"></div>
  </div>
</template>
