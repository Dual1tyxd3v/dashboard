<script setup lang="ts">
import { getCurrencies } from "../api";
import { useConfigStore } from "../store";
import { formatValues, getCurrencyExchangeURL } from "../utils/currency";
import Loader from "./Loader.vue";
import { onMounted, reactive, watch } from "vue";

const currencies = reactive<{ isLoading: boolean; data: null | Object }>({
  isLoading: false,
  data: null,
});
const store = useConfigStore();

async function loadCurrency() {
  currencies.isLoading = true;
  const resp = await getCurrencies(
    getCurrencyExchangeURL(store.Currency.base, store.Currency.query),
  );
  currencies.isLoading = false;

  if (!resp.data) return;
  const data = formatValues(resp.data);

  currencies.data = data;
}

watch([() => store.Currency.base, () => store.Currency.query], () => {
  loadCurrency();
});

onMounted(() => {
  loadCurrency();
});
</script>

<template>
  <div
    class="relative overflow-hidden rounded-2xl md:min-h-[315px] md:min-w-[300px]"
    :style="`background-image: linear-gradient(175.70deg, ${store.Colors.block[0]} 12.226%,${store.Colors.block[1]} 113.851%)`"
  >
    <Loader v-if="currencies.isLoading" />
    <p v-else-if="!currencies.data">no data</p>
    <div v-else class="p-4" :style="`color: ${store.Colors.main}`">
      <h3 class="mb-4 text-2xl font-bold">Currencies</h3>
      <ul>
        <li
          v-for="(value, name, i) in currencies.data"
          :key="`cur_${i}_${name}`"
          class="rounded-xl px-4 py-3 [&:not(:last-child)]:mb-2"
          :style="`background-image: linear-gradient(175.70deg, ${store.Colors.block[0]} 12.226%,${store.Colors.block[1]} 113.851%)`"
        >
          <p
            class="flex items-center justify-between uppercase"
            :style="`color: ${store.Colors.miniTitle}`"
          >
            1 {{ name }} to {{ store.Currency.base }}
            <span class="text-l" :style="`color: ${store.Colors.main}`">
              {{ value }}</span
            >
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
