<script setup lang="ts">
import { UTILS } from "../../config";
import { useConfigStore } from "../../store";
import { getBlockBackground } from "../../utils/styles";
import UtilsItem from "./UtilsItem.vue";

const config = useConfigStore();
</script>

<template>
  <div
    class="flex flex-wrap items-center justify-center gap-3 rounded-2xl px-2 py-1"
    :style="getBlockBackground(config.Colors.block[0], config.Colors.block[1])"
  >
    <UtilsItem
      v-for="(value, key) in UTILS"
      :key="key"
      :name="key"
      :icon="value"
    />
  </div>
</template>
