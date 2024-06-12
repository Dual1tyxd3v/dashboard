<script setup lang="ts">
import { ref } from "vue";
import { useConfigStore } from "../../store";
import { OptionsTabs } from "../../config";
import OptionsTab from "./OptionsTab.vue";

type Props = {
  closeOptions: () => void;
};

const props = defineProps<Props>();

const config = useConfigStore();

const activeTab = ref(OptionsTabs.BACKGROUND);

function closeHandler() {
  activeTab.value = OptionsTabs.BACKGROUND;
  props.closeOptions();
}
</script>

<template>
  <div
    class="bg-black-90% fixed bottom-5 right-0 top-5 z-30 w-[50%] rounded-l-2xl backdrop:blur-[30px]"
    :style="`background-image: linear-gradient(157.20deg, ${config.colors.bgNav[0]} 31.883%, ${config.colors.bgNav[1]} 100%);`"
  >
    <div class="relative flex h-full w-full p-5">
      <button
        @click="closeHandler"
        class="absolute right-3 top-3 opacity-50 transition-opacity hover:opacity-100"
        title="Close options"
        aria-label="Close options"
      >
        <v-icon :fill="config.colors.main" scale="2" name="io-close-sharp" />
      </button>

      <ul
        class="h-full w-40 min-w-40 bg-[length:1px_100%] bg-right bg-no-repeat py-3 pr-3"
        :style="`background-image: linear-gradient(to bottom, transparent, ${config.colors.divider}, transparent);`"
      >
        <li class="[&:not(:last-child)]:mb-3"v-for="(k, v, i) in OptionsTabs" :key="`tab_${i}_${k}`">
          <OptionsTab
            @click="activeTab = k"
            :label="v.replace(/_/g, ' ').toLowerCase()"
            :isActive="activeTab === k"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
