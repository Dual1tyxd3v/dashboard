<script setup lang="ts">
import { ref } from "vue";
import { useConfigStore } from "../../store";
import { OptionsTabs } from "../../config";
import OptionsTab from "./OptionsTab.vue";
import Background from "./Background.vue";
import FastLinks from "./FastLinks.vue";
import Colors from "./Colors.vue";
import Currency from "./Currency.vue";
import { getDividerBackground, getNavBackground } from "../../utils/styles";
import NavLinks from "./NavLinks.vue";

type Props = {
  closeOptions: () => void;
};
const props = defineProps<Props>();

const Tabs = {
  Background,
  Currency,
  Colors,
  FastLinks,
  NavLinks,
};

const config = useConfigStore();

const activeTab = ref(OptionsTabs.BACKGROUND);

function closeHandler() {
  activeTab.value = OptionsTabs.BACKGROUND;
  props.closeOptions();
}
</script>

<template>
  <div
    class="fixed bottom-5 right-0 top-5 z-30 w-[50%] rounded-l-2xl bg-black-90% backdrop:blur-[30px] md:min-w-[614px]"
    :style="getNavBackground(config.Colors.bgNav[0], config.Colors.bgNav[1])"
  >
    <div class="relative flex h-full w-full p-5 pt-7">
      <button
        @click="closeHandler"
        class="absolute right-0 top-0 opacity-50 transition-opacity hover:opacity-100"
        title="Close options"
        aria-label="Close options"
      >
        <v-icon :fill="config.Colors.main" scale="2" name="io-close-sharp" />
      </button>

      <ul
        class="h-full w-40 min-w-40 bg-[length:1px_100%] bg-right bg-no-repeat py-3 pr-3"
        :style="getDividerBackground(config.Colors.divider, true)"
      >
        <li
          class="[&:not(:last-child)]:mb-3"
          v-for="(k, v, i) in OptionsTabs"
          :key="`tab_${i}_${k}`"
        >
          <OptionsTab
            @click="activeTab = k"
            :label="v.replace(/_/g, ' ').toLowerCase()"
            :isActive="activeTab === k"
          />
        </li>
      </ul>
      <div class="relative flex-grow overflow-hidden">
        <KeepAlive>
          <Transition name="tab" mode="out-in">
            <component
              :is="Tabs[activeTab as keyof typeof Tabs]"
              :key="activeTab"
              class="flex flex-col overflow-y-scroll"
            ></component>
          </Transition>
        </KeepAlive>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-leave-to {
  transform-origin: bottom;
  position: absolute;
  right: 0;
  transform: scaleY(0);
}
.tab-enter-from {
  opacity: 0;
}
.tab-enter-active,
.tab-leave-active {
  transition:
    transform 0.2s cubic-bezier(0.8, 0, 0.29, 0.99),
    opacity 0.2s cubic-bezier(0.8, 0, 0.29, 0.99);
}
</style>
