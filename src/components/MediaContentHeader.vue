<script setup lang="ts">
import { computed, ref } from "vue";
import { AppStorage } from "../config";
import { useAppStore, useConfigStore } from "../store";
import Button from "./Button.vue";
import { MediaLink } from "../types";
import MediaItem from "./MediaItem.vue";
import NewMediaLink from "./NewMediaLink.vue";

type Props = {
  type: AppStorage;
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

const getScrollBarColor = computed(() => configStore.colors.icon);
const getScrollBarActiveColor = computed(() => configStore.colors.active);
</script>

<template>
  <Transition name="form">
    <NewMediaLink
      v-if="showForm"
      :closeForm="() => (showForm = false)"
      :type="type"
    />
  </Transition>
  <div
    class="relative mb-10 min-h-16 rounded-2xl"
    :style="`background-image: linear-gradient(175.70deg, ${configStore.backgroundImage?.block[0]} 12.226%,${configStore.backgroundImage?.block[1]} 113.851%)`"
  >
    <Button
      :class="`absolute ${getButtonStyles} left-[50%] z-[5] translate-x-[-50%]`"
      @click="showForm = true"
    >
      Add new link
    </Button>
    <div class="dark-edges relative h-full overflow-hidden rounded-2xl">
      <div
        class="flex-start container flex h-full w-full items-center gap-3 overflow-x-scroll px-2 py-1"
      >
        <transition-group name="media">
          <MediaItem
            v-for="link in appStore[
              props.type as keyof typeof appStore
            ] as MediaLink[]"
            :key="`${link.url}`"
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
  transform: scaleX(0.01) translateY(150%);
}
.media-enter-active,
.media-leave-active,
.media-move {
  transition: all 0.2s ease-in-out;
}
.media-leave-active {
  position: absolute;
}

.container::-webkit-scrollbar-thumb {
  background-color: v-bind(getScrollBarColor);
  cursor: pointer;
}
.container::-webkit-scrollbar-thumb:hover {
  background-color: v-bind(getScrollBarActiveColor);
}
</style>
