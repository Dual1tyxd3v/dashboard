<script setup lang="ts">
import { computed, ref, watch } from "vue";
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
const needSlider = ref(false);
const slider = ref(null);
const slidesContainer = ref(null);

const getButtonStyles = computed(() => {
  const links = appStore[props.type as keyof typeof appStore] as MediaLink[];

  return links.length
    ? "top-[100%] text-xs py-1-important px-6 tracking-[4px]"
    : "top-[50%] translate-y-[-50%]";
});

watch(
  [
    () => slider.value,
    () => (appStore[props.type as keyof typeof appStore] as MediaLink[]).length,
  ],
  () => {
    if (!slider.value) return;

    const sliderWidth = (slider.value as HTMLElement).getBoundingClientRect()
      .width;
    const slides = appStore[props.type as keyof typeof appStore] as MediaLink[];
    const slidesContainerWidth =
      slides.length * configStore.size.mediaLinks.width * 16 +
      (slides.length - 1) * configStore.size.mediaLinks.gap * 16;

    needSlider.value = sliderWidth < slidesContainerWidth ? true : false;
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <NewMediaLink
    v-if="showForm"
    :closeForm="() => (showForm = false)"
    :type="type"
  />
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
    <div class="relative h-full w-full overflow-hidden px-2 py-1" ref="slider">
      <div
        :class="`flex-start flex h-full items-center`"
        :style="`gap: ${configStore.size.mediaLinks.gap}rem`"
        ref="slidesContainer"
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
</style>
