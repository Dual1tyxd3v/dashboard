<script setup lang="ts">
import { LocalStorage } from "../config";
import { useAppStore, useConfigStore } from "../store";
import { MediaLink } from "../types";

type Props = {
  media: MediaLink;
  type: LocalStorage;
};
const props = defineProps<Props>();

const configStore = useConfigStore();
const appStore = useAppStore();

function formatLabel(text: string) {
  return text.length > 10 ? `${text.slice(0, 10)}...` : text;
}

function onClickHandler(e: Event) {
  e.stopPropagation();

  appStore.deleteLink(props.media, props.type);
}
</script>

<template>
  <div
    class="group relative w-40 cursor-pointer overflow-hidden rounded-2xl p-2 text-center text-sm"
    :style="`background: ${appStore.activeLink?.url === media.url ? configStore.colors.activeMedia : configStore.colors.icon}; color: ${configStore.colors.main}`"
    @click="appStore.activeLink = props.media"
    :title="media.label"
  >
    {{ formatLabel(media.label) }}
    <button
      class="absolute right-[-50%] top-[50%] h-full origin-right translate-y-[-50%] scale-x-0 bg-black-50% px-1 transition-all group-hover:right-0 group-hover:scale-x-100"
      title="Delete link"
      @click="onClickHandler"
    >
      <v-icon name="io-trash-bin" />
    </button>
  </div>
</template>
