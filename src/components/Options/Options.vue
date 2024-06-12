<script setup lang="ts">
import { ref } from "vue";
import { useConfigStore } from "../../store";
import { OptionsTabs } from "../../config";

type Props = {
  closeOptions: () => void;
};

defineProps<Props>();

const config = useConfigStore();

const activeTab = ref(OptionsTabs.BACKGROUND);

function changeActiveTab(v: OptionsTabs) {
  activeTab.value = v;
}
</script>

<template>
  <div
    class="bg-black-90% fixed bottom-5 right-0 top-5 z-30 w-[50%] rounded-l-2xl backdrop:blur-[30px]"
    :style="`background-image: linear-gradient(157.20deg, ${config.colors.bgNav[0]} 31.883%, ${config.colors.bgNav[1]} 100%);`"
  >
    <div class="relative h-full w-full p-5">
      <button
        @click="closeOptions"
        class="absolute right-3 top-3 opacity-50 transition-opacity hover:opacity-100"
        title="Close options"
        aria-label="Close options"
      >
        <v-icon :fill="config.colors.main" scale="2" name="io-close-sharp" />
      </button>
    </div>
  </div>
</template>
