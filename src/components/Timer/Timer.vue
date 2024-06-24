<script setup lang="ts">
import { onUnmounted, ref } from "vue";
import { useConfigStore } from "../../store";
import { getBlockBackground } from "../../utils/styles";
import TimerField from "./TimerField.vue";
import { copyObject } from "../../utils/common";
import { TimeData } from "../../types";
import { getNewTimerValue } from "../../utils/timeAndDate";
import TimerControls from "./TimerControls.vue";

const config = useConfigStore();

const initTimer = { h: ["0", "0"], m: ["0", "0"], s: ["0", "0"] };

const timer = ref<TimeData>(copyObject(initTimer));
const memorizedTimer = ref<TimeData | null>(null);
const interval = ref<undefined | number>(undefined);

function onChangeHandler(e: Event, index: number, max: number) {
  const { value } = e.target as HTMLInputElement;
  const type = (e.target as HTMLInputElement).dataset
    .type as keyof typeof timer.value;

  timer.value[type][index] = value;

  if (+timer.value[type].join("") > max) {
    timer.value[type] = max.toString().split("");
  }
}

function onStartHandler() {
  interval.value = setInterval(() => {
    const newTime = getNewTimerValue(timer.value);

    if (!newTime) {
      timer.value = copyObject(memorizedTimer.value || initTimer);
      clearInterval(interval.value);
      interval.value = undefined;
      return;
    }
    timer.value = newTime;
  }, 1000);
}

function onPauseHandler() {
  clearInterval(interval.value);
  interval.value = undefined;
}

function onResetHandler() {
  timer.value = copyObject(initTimer);
}

function onSaveHandler() {
  memorizedTimer.value = copyObject(timer.value);
}

onUnmounted(() => clearInterval(interval.value));
</script>

<template>
  <div
    class="mx-auto w-min rounded-2xl p-2"
    :style="`${getBlockBackground(config.Colors.block[0], config.Colors.block[1])}`"
  >
    <form>
      <div
        class="mb-3 flex items-center gap-2 text-lg"
        :style="!!interval && `color: ${config.Colors.active}`"
      >
        <TimerField
          :onChangeHandler="onChangeHandler"
          :value="timer.h"
          :max="23"
          type="h"
          :isActive="!!interval"
        />
        :
        <TimerField
          :onChangeHandler="onChangeHandler"
          :value="timer.m"
          :max="59"
          type="m"
          :isActive="!!interval"
        />
        :
        <TimerField
          :onChangeHandler="onChangeHandler"
          :value="timer.s"
          :max="59"
          type="s"
          :isActive="!!interval"
        />
      </div>
      <TimerControls
        :isActive="!!interval"
        :start="onStartHandler"
        :pause="onPauseHandler"
        :reset="onResetHandler"
        :save="onSaveHandler"
        :memorized="memorizedTimer"
      />
    </form>
  </div>
</template>
