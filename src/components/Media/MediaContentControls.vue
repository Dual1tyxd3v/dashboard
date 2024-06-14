<script setup lang="ts">
import { computed, ref } from "vue";
import { useAppStore, useConfigStore } from "../../store";
import { MediaLink } from "../../types";
import { AppStorage } from "../../config";
import NewMediaLink from "./NewMediaLink.vue";
import Button from "../Button.vue";

type Props = {
  type: AppStorage;
  changeHandler: (v: string) => void;
  value: string;
};

const props = defineProps<Props>();

const appStore = useAppStore();
const configStore = useConfigStore();

const showForm = ref(false);
const showSearch = ref(false);
const input = ref(null);

const getLinksLength = computed(() => {
  const links = appStore[props.type as keyof typeof appStore] as MediaLink[];

  return links.length;
});

function onChangeHandler(e: Event) {
  const { value } = e.target as HTMLInputElement;
  props.changeHandler(value);
}

function onBlurHandler() {
  if (!props.value) {
    showSearch.value = false;
  }
}

function onClickHandler() {
  showSearch.value = true;

  setTimeout(() => input.value && (input.value as HTMLInputElement).focus(), 0);
}
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
    :class="`absolute left-[50%] z-[5] flex translate-x-[-50%] items-stretch gap-3 transition-all ${
      getLinksLength
        ? 'text-xs-important top-[100%] tracking-[4px]'
        : 'top-[50%] translate-y-[-50%]'
    }`"
  >
    <Button
      :class="`my-0 transition-all ${getLinksLength ? 'px-6 py-1-important text-xs tracking-[4px]' : ''}`"
      @click="showForm = true"
    >
      Add new link
    </Button>
    <Button
      :class="
        getLinksLength
          ? 'flex gap-2 px-6 py-1-important text-xs tracking-[4px] transition-all'
          : 'hidden'
      "
      @click="onClickHandler"
      title="Search link"
    >
      <v-icon name="co-magnifying-glass" />
      <form @submit.prevent="" v-if="showSearch">
        <input
          class="px-1 tracking-widest outline-none"
          :style="`
            color: ${configStore.Colors.main};
            background: linear-gradient(157.20deg, ${configStore.Colors.bgNav[0]} 31.883%, ${configStore.Colors.bgNav[1]} 100%);`"
          ref="input"
          @blur="onBlurHandler"
          type="text"
          :value="value"
          @input="onChangeHandler"
        />
      </form>
    </Button>
  </div>
</template>
