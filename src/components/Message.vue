<script setup lang="ts">
import { useConfigStore } from "../store";
import { getBlockBackground } from "../utils/styles";
import Button from "./Button.vue";

type Props = {
  message: string;
  onClick?: () => void;
};

const props = defineProps<Props>();

const configStore = useConfigStore();

function onClickHandler() {
  props.onClick && props.onClick();
}
</script>

<template>
  <div
    class="fixed left-[50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%] rounded-xl bg-black px-4 py-3"
    :style="
      getBlockBackground(
        configStore.Colors.block[0],
        configStore.Colors.block[1],
      )
    "
  >
    <p
      class="mb-6 text-center capitalize"
      :style="`color: ${configStore.Colors.main}`"
      v-html="props.message"
    ></p>
    <Button type="button" @click="onClickHandler">Ok</Button>
  </div>
</template>
