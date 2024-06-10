<script setup lang="ts">
import { computed } from "vue";
import { LocalStorage } from "../config";
import { useAppStore, useConfigStore } from "../store";
import Button from "./Button.vue";
import { MediaLink } from "../types";
import MediaItem from "./MediaItem.vue";

type Props = {
  type: LocalStorage;
};
const props = defineProps<Props>();

const appStore = useAppStore();
const configStore = useConfigStore();

const getButtonStyles = computed(() => {
  const links = appStore[props.type as keyof typeof appStore] as MediaLink[];

  return links.length
    ? "top-[100%] text-xs py-1-important px-6 tracking-[4px]"
    : "top-[50%] translate-y-[-50%]";
});
</script>

<template>
  <div
    class="relative mb-10 min-h-16 rounded-2xl"
    :style="`background-image: linear-gradient(175.70deg, ${configStore.backgroundImage?.block[0]} 12.226%,${configStore.backgroundImage?.block[1]} 113.851%)`"
  >
    <Button
      :class="`absolute ${getButtonStyles} left-[50%] translate-x-[-50%]`"
    >
      Add new link
    </Button>
    <div class="h-full overflow-hidden px-2 py-1">
      <div class="flex h-full items-center justify-center">
        <MediaItem
          v-for="(link, i) in appStore[
            props.type as keyof typeof appStore
          ] as MediaLink[]"
          :key="`media_${i}, ${link.url}`"
          :media="link"
          :type="props.type"
        />
      </div>
    </div>
  </div>
</template>
