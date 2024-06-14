<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { AppStorage } from "../../config";
import { useAppStore, useConfigStore } from "../../store";
import { MediaLink } from "../../types";
import MediaItem from "./MediaItem.vue";
import MediaContentControls from "./MediaContentControls.vue";

type Props = {
  type: AppStorage;
};
const props = defineProps<Props>();

const appStore = useAppStore();
const configStore = useConfigStore();

const itemsContainer = ref(null);
const search = ref("");

function changeHandler(value: string) {
  search.value = value;
}

const filteredLinks = computed(() =>
  (appStore[props.type as keyof typeof appStore] as MediaLink[]).filter(
    (link) => link.label.toLowerCase().includes(search.value.toLowerCase()),
  ),
);

watch(
  () => appStore[props.type].length,
  (newValue, oldValue) => {
    if (itemsContainer.value && newValue > oldValue) {
      setTimeout(
        () =>
          itemsContainer.value &&
          ((itemsContainer.value as HTMLElement).scrollLeft += 9999999999999),
        0,
      );
    }
  },
);
</script>

<template>
  <div
    class="relative mb-10 min-h-16 rounded-2xl"
    :style="`background-image: linear-gradient(175.70deg, ${configStore.Colors.block[0]} 12.226%,${configStore.Colors.block[1]} 113.851%)`"
  >
    <MediaContentControls
      :changeHandler="changeHandler"
      :type="type"
      :value="search"
    />
    <div class="dark-edges relative h-full overflow-hidden rounded-2xl">
      <div
        ref="itemsContainer"
        class="flex-start flex h-full w-full items-center gap-3 overflow-x-scroll px-2 py-1"
      >
        <transition-group name="media">
          <MediaItem
            v-for="link in filteredLinks"
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
