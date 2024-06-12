<script setup lang="ts">
import { useConfigStore } from "../store";
import { getFormElementStyle } from "../utils/styles";

const props = defineProps({
  closeForm: {
    type: Function,
    required: true,
  },
});

const store = useConfigStore();

function onClickHandler(e: Event) {
  if ((e.target as HTMLDivElement).dataset.js !== "wrapper") return;

  props.closeForm();
}
</script>

<template>
  <div
    @click="onClickHandler"
    class="fixed inset-0 z-10 flex items-center justify-center"
    data-js="wrapper"
  >
    <div
      class="relative z-10 overflow-hidden rounded-2xl border-[3px] border-transparent bg-origin-border"
      :style="
        getFormElementStyle(
          store.Colors.inputBg || '#000',
          store.Colors.inputBg || '#000',
          store.Colors.fromElementsBorder || '#fff',
        )
      "
    >
      <slot></slot>
    </div>
  </div>
</template>
