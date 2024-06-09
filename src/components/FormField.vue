<script setup lang="ts">
import { computed } from "vue";
import { useConfigStore } from "../store";
import { getCurrentDate, getFormElementStyle } from "../utils";

type Props = {
  type: string;
  label: string;
  value: string;
  required?: boolean;
  changeHandler: (e: Event) => void;
};

const store = useConfigStore();
const props = defineProps<Props>();
console.log(props.value);
const getFocusColor = computed(() => store.colors.active);
</script>

<template>
  <div class="mb-3 flex flex-col">
    <label class="mb-1 capitalize" :for="props.label">{{ label }}</label>
    <input
      class="input rounded-2xl border-[2px] border-transparent bg-origin-border px-2 py-1 outline-none placeholder:capitalize"
      :type="props.type"
      :placeholder="props.label"
      :id="props.label"
      :value="props.value"
      :required="required"
      max="3000-12-31"
      :data-js="props.label"
      :min="getCurrentDate()"
      @change="changeHandler"
      :style="
        getFormElementStyle(
          store.colors?.inputBg || '#000',
          store.colors?.inputBg || '#000',
          store.colors?.fromElementsBorder || '#fff',
        )
      "
    />
  </div>
</template>

<style>
.input:focus {
  border-color: v-bind(getFocusColor);
}
</style>
