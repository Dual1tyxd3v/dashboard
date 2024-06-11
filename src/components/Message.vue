<script setup lang="ts">
import { useConfigStore } from "../store";
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
    :style="`background-image: linear-gradient(175.70deg, ${configStore.backgroundImage?.block[0]} 12.226%,${configStore.backgroundImage?.block[1]} 113.851%)`"
  >
    <p class="mb-6" :style="`color: ${configStore.colors.main}`">
      {{ props.message }}
    </p>
    <Button @click="onClickHandler">Ok</Button>
  </div>
</template>
