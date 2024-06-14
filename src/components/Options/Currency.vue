<script setup lang="ts">
import { getAllCurrencies } from "../../api";
import { useConfigStore } from "../../store";
import Loader from "../Loader.vue";
import Message from "../Message.vue";
import { computed, onMounted, ref } from "vue";
import FormField from "./FormField.vue";
import Hint from "./Hint.vue";
import InputSelect from "./InputSelect.vue";
import FormButtons from "./FormButtons.vue";
import { useAppStore } from "../../store";

const config = useConfigStore();
const appStore = useAppStore();

const initData = {
  base: config.Currency.base,
  currencies: [
    config.Currency.query[0] || "",
    config.Currency.query[1] || "",
    config.Currency.query[2] || "",
    config.Currency.query[3] || "",
  ],
};

const message = ref("");
const isLoading = ref(true);
const formData = ref<typeof initData>(JSON.parse(JSON.stringify(initData)));

const disabled = computed(
  () => JSON.stringify(initData) === JSON.stringify(formData.value),
);

onMounted(async () => {
  if (!appStore.allCurrencies.length) {
    const resp = await getAllCurrencies();

    appStore.allCurrencies = resp.data;
  }
  isLoading.value = false;
});

function onChangeHandler(e: Event) {
  const select = e.target as HTMLSelectElement;
  const { value, name } = select;

  if (name === "base") {
    formData.value.base = value;
    return;
  }
  const index = +name.slice(name.length - 1);

  if (value && formData.value.currencies.includes(value)) {
    message.value = "Currency has already been added";
    select.value = config.Currency.query[index];
    return;
  }

  formData.value.currencies[index] = value;
}

function save() {
  config.Currency.base = formData.value.base;
  config.Currency.query = [...formData.value.currencies.filter((curr) => curr)];
  message.value = "Config saved successfully";
}

function reset() {
  formData.value = JSON.parse(JSON.stringify(initData));
  message.value = "config reset successfully";
}
</script>

<template>
  <form
    class="relative h-full w-full rounded-2xl p-3"
    :style="`color: ${config.Colors.main}`"
  >
    <Message
      v-if="message"
      :message="message"
      :onClick="() => (message = '')"
    />
    <Loader v-if="isLoading" />
    <FormField>
      <p>Base</p>
      <div class="w-60">
        <InputSelect
          name="base"
          :value="formData.base"
          @change="onChangeHandler"
        />
      </div>
    </FormField>
    <Hint>your current currency</Hint>
    <FormField>
      <p>Currencies of interest</p>
      <div class="w-60">
        <InputSelect
          v-for="(curr, i) in formData.currencies"
          :key="`${i}_${curr}`"
          :index="i"
          :name="`currency${i}`"
          :value="formData.currencies[i]"
          @change="onChangeHandler"
        />
      </div>
    </FormField>
    <FormButtons :disabled="disabled" :save="save" :reset="reset" />
  </form>
</template>
