<script setup lang="ts">
import { useConfigStore } from "../../store";
import { TimeData } from "../../types";
import TimerButton from "./TimerButton.vue";
import { getMemorizedTime } from "../../utils/timeAndDate";

type Props = {
  isActive: boolean;
  start: () => void;
  pause: () => void;
  save: () => void;
  reset: () => void;
  memorized: TimeData | null;
};
defineProps<Props>();

const config = useConfigStore();
</script>

<template>
  <div class="flex items-center justify-center gap-5">
    <TimerButton
      v-if="!isActive"
      :click="start"
      title="Start timer"
      icon="md-notstarted-outlined"
    />
    <TimerButton
      v-else
      :click="pause"
      title="Pause"
      icon="md-pausecircle-outlined"
    />
    <TimerButton
      :click="save"
      :title="getMemorizedTime(memorized)"
      icon="co-save"
      :activeStyle="memorized && `color: ${config.Colors.active}; opacity: 1`"
    />
    <TimerButton
      :click="reset"
      title="Reset timer"
      icon="md-restartalt-twotone"
    />
  </div>
</template>
