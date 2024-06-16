<script setup lang="ts">
import Message from "../Message.vue";
import FormButtons from "./FormButtons.vue";
import { useAppStore, useConfigStore } from "../../store";

type Props = {
  onSave?: () => void;
  onReset?: () => void;
};
const props = defineProps<Props>();

const appStore = useAppStore();
const config = useConfigStore();

function saveHandler() {
  props.onSave && props.onSave();
  appStore.message = "Config saved successfully";
}

function resetHandler() {
  props.onReset && props.onReset();
  appStore.message = "config reset successfully";
}
</script>

<template>
  <form class="h-full w-full p-3" :style="`color: ${config.Colors.main}`">
    <Message
      v-if="appStore.message"
      :message="appStore.message"
      :onClick="() => (appStore.message = '')"
    />
    <slot></slot>
    <FormButtons :save="saveHandler" :reset="resetHandler" />
  </form>
</template>
