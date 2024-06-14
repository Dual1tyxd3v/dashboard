<script setup lang="ts">
import { useConfigStore } from "../../store";
import Button from "../Button.vue";

type Props = {
  reset: () => void;
  save: () => void;
};
const props = defineProps<Props>();

const config = useConfigStore();

function onResetHandler(needHardReset: boolean) {
  if (needHardReset) {
    config.hardReset();
  } else {
    config.reset();
  }

  props.reset();
}

function onSaveHandler() {
  props.save();
  config.save();
}
</script>

<template>
  <div class="mt-auto flex">
    <Button type="button" @click="() => onResetHandler(false)">Reset</Button>
    <Button type="button" @click="onSaveHandler">Save</Button>
    <Button type="button" @click="() => onResetHandler(true)"
      >Hard reset</Button
    >
  </div>
</template>
