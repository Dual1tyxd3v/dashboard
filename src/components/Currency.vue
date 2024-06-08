<script setup lang="ts">
import { getCurrencies } from "../api";
import Loader from "./Loader.vue";
import { onMounted, reactive } from "vue";

const currencies = reactive<{ isLoading: boolean; data: null | Object }>({
  isLoading: true,
  data: null,
});

onMounted(async () => {
  const data = await getCurrencies();
  currencies.isLoading = false;

  if (!data.data) return;

  currencies.data = data.data;
});
</script>

<template>
  <div
    class="relative overflow-hidden rounded-2xl bg-bg-block md:min-h-[315px] md:min-w-[300px]"
  >
    <Loader v-if="currencies.isLoading" />
    <p v-else-if="!currencies.data">no data</p>
    <div v-else class="p-4 text-white">
      <h3 class="mb-4 text-2xl font-bold">Currencies</h3>
      <ul>
        <li
          v-for="(value, name, i) in currencies.data"
          :key="`cur_${i}_${name}`"
          class="bg-mini-block rounded-xl px-4 py-3 [&:not(:last-child)]:mb-2"
        >
          <p class="text-gray-thin flex justify-between uppercase items-center">
            {{ name }} <span class="text-lg text-white">{{ value }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
