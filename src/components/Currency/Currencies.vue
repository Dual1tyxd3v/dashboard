<script setup lang="ts">
import { getCurrencies } from "../../api";
import { useConfigStore } from "../../store";
import { formatValues, getCurrencyExchangeURL } from "../../utils/currency";
import { getBlockBackground } from "../../utils/styles";
import Loader from "../Loader.vue";
import { onMounted, reactive, watch } from "vue";
import Currency from "./Currency.vue";

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
    :style="getBlockBackground(store.Colors.block[0], store.Colors.block[1])"
  >
    <Loader v-if="currencies.isLoading" />
    <p v-else-if="!currencies.data">no data</p>
    <div v-else class="p-4" :style="`color: ${store.Colors.main}`">
      <h3 class="mb-4 text-2xl font-bold">Currencies</h3>
      <ul>
        <Currency
          v-for="(value, name) in currencies.data"
          :key="`cur${name}`"
          :name="name"
          :value="value.toString()"
        />
      </ul>
    </div>
  </div>
</template>
