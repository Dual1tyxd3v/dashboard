<script setup lang="ts">
import { getCurrencies } from "../../api";
import { useConfigStore } from "../../store";
import { formatValues, getCurrencyExchangeURL } from "../../utils/currency";
import { getBlockBackground } from "../../utils/styles";
import Loader from "../Loader.vue";
import { onMounted, reactive, watch } from "vue";
import Currency from "./Currency.vue";
import Error from "../Error.vue";

const currencies = reactive<{
  isLoading: boolean;
  data: null | Object;
  error: string;
}>({
  isLoading: false,
  data: null,
  error: "",
});
const store = useConfigStore();

async function loadCurrency() {
  currencies.isLoading = true;
  const resp = await getCurrencies(
    getCurrencyExchangeURL(store.Currency.base, store.Currency.query),
  );
  currencies.isLoading = false;

  currencies.error = resp.error;
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
    class="relative overflow-hidden rounded-2xl xl:min-h-[315px] xl:min-w-[300px]"
    :style="`
    ${getBlockBackground(store.Colors.block[0], store.Colors.block[1])}; 
    color: ${store.Colors.main}`"
  >
    <Loader v-if="currencies.isLoading" />
    <Error
      v-else-if="currencies.error"
      :error="currencies.error"
      :reload="() => loadCurrency()"
    />
    <div v-else class="p-4">
      <h3 class="mb-2 xl:mb-4 text-2xl font-bold">Currencies</h3>
      <ul class="flex items-center justify-start gap-3 xl:block">
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
