<script setup lang="ts">
import { computed, ref } from "vue";
import { LocalStorage } from "../config";
import { useAppStore, useConfigStore } from "../store";
import Button from "./Button.vue";
import { MediaLink } from "../types";
import MediaItem from "./MediaItem.vue";
import NewMediaLink from "./NewMediaLink.vue";

type Props = {
  type: LocalStorage;
};
const props = defineProps<Props>();

const appStore = useAppStore();
const configStore = useConfigStore();

const showForm = ref(false);

const getButtonStyles = computed(() => {
  const links = appStore[props.type as keyof typeof appStore] as MediaLink[];

  return links.length
    ? "top-[100%] text-xs py-1-important px-6 tracking-[4px]"
    : "top-[50%] translate-y-[-50%]";
});
</script>

<template>
  <NewMediaLink v-if="showForm" :closeForm="() => (showForm = false)" />
  <div
    class="relative mb-10 min-h-16 rounded-2xl"
    :style="`background-image: linear-gradient(175.70deg, ${configStore.backgroundImage?.block[0]} 12.226%,${configStore.backgroundImage?.block[1]} 113.851%)`"
  >
    <Button
      :class="`absolute ${getButtonStyles} left-[50%] translate-x-[-50%]`"
      @click="showForm = true"
    >
      Add new link
    </Button>
    <div class="h-full overflow-hidden px-2 py-1">
      <div class="flex h-full items-center justify-center">
        <transition-group name="media" move-class="media-move">
          <MediaItem
            v-for="(link, i) in appStore[
              props.type as keyof typeof appStore
            ] as MediaLink[]"
            :key="`media_${i}, ${link.url}`"
            :media="link"
            :type="props.type"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<style scoped>
.media-enter-from,
.media-leave-to {
  transform: scaleX(0);
  opacity: 0;
}
.media-enter-active,
.media-leave-active {
  transition:
    transform 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
}
.media-move {
  transition: all 0.2s ease-in;
}
</style>
