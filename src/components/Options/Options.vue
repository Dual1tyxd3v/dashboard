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
import Profile from "./Profile.vue";

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
  Profile,
};

const config = useConfigStore();

const activeTab = ref(OptionsTabs.BACKGROUND);
const onRight = ref(true);

function closeHandler() {
  activeTab.value = OptionsTabs.BACKGROUND;
  props.closeOptions();
}
</script>

<template>
  <div
    :class="`fixed bottom-5 top-5 z-30 w-[50%] bg-black-90% backdrop:blur-[30px] lg:min-w-[614px] ${onRight ? 'stick-right' : 'stick-left'}`"
    :style="getNavBackground(config.Colors.bgNav[0], config.Colors.bgNav[1])"
  >
    <div class="relative flex h-full w-full p-5 pt-7">
      <div
        :class="`absolute ${onRight ? 'right-5' : 'left-5'} top-0 flex gap-2`"
      >
        <button
          :class="`opacity-50 transition-opacity hover:opacity-100 ${!onRight && 'order-2'}`"
          title="Switch options side"
          aria-label="Switch options side"
          @click="onRight = !onRight"
        >
          <v-icon
            class="scale-50 lg:scale-75 xl:scale-100"
            :fill="config.Colors.main"
            scale="2"
            :name="onRight ? 'md-switchleft' : 'md-switchright'"
          />
        </button>
        <button
          @click="closeHandler"
          class="opacity-50 transition-opacity hover:opacity-100"
          title="Close options"
          aria-label="Close options"
        >
          <v-icon
            class="scale-50 lg:scale-75 xl:scale-100"
            :fill="config.Colors.main"
            scale="2"
            name="io-close-sharp"
          />
        </button>
      </div>

      <ul
        class="h-full w-40 min-w-40 bg-[length:1px_100%] bg-right bg-no-repeat py-3 pr-3"
        :style="getDividerBackground(config.Colors.divider, true)"
      >
        <OptionsTab
          v-for="(k, v, i) in OptionsTabs"
          :key="`tab_${i}_${k}`"
          @click="activeTab = k"
          :label="v.replace(/_/g, ' ').toLowerCase()"
          :isActive="activeTab === k"
        />
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
