<script setup lang="ts">
import { computed } from "vue";
import { useConfigStore } from "../../store";
import { getFormElementStyle } from "../../utils/styles";
import { getCurrentDate } from "../../utils/timeAndDate";

type Props = {
  type: string;
  label: string;
  value: string;
  required?: boolean;
  changeHandler: (e: Event) => void;
};

const store = useConfigStore();
const props = defineProps<Props>();

const getBackgroundColor = computed(() => store.Colors.miniTitle);
const getFocusColor = computed(() => store.Colors.active);
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
      @input="changeHandler"
      :style="
        getFormElementStyle(
          store.Colors.inputBg,
          store.Colors.inputBg,
          store.Colors.formElementsBorder,
        )
      "
    />
  </div>
</template>

<style>
.input:focus {
  border-color: v-bind(getFocusColor);
}
.input::-webkit-calendar-picker-indicator {
  background-color: v-bind(getBackgroundColor);
  border-radius: 10px;
  cursor: pointer;
}
</style>
