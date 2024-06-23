<script setup lang="ts">
import { ref } from "vue";
import { useConfigStore } from "../../store";
import { getBlockBackground } from "../../utils/styles";
import TimerField from "./TimerField.vue";

const config = useConfigStore();

const timer = ref({ h: ["0", "0"], m: ["0", "0"], s: ["0", "0"] });

function onChangeHandler(e: Event, index: number, max: number) {
  const { value } = e.target as HTMLInputElement;
  const type = (e.target as HTMLInputElement).dataset
    .type as keyof typeof timer.value;

  timer.value[type][index] = value;

  if (+timer.value[type].join("") > max) {
    timer.value[type] = max.toString().split("");
  }
}
</script>

<template>
  <div
    class="mx-auto w-min rounded-2xl p-2"
    :style="getBlockBackground(config.Colors.block[0], config.Colors.block[1])"
  >
    <form class="">
      <div class="flex items-center gap-2 text-lg">
        <TimerField
          :onChangeHandler="onChangeHandler"
          :value="timer.h"
          :max="23"
          type="h"
        />
        :
        <TimerField
          :onChangeHandler="onChangeHandler"
          :value="timer.m"
          :max="59"
          type="m"
        />
        :
        <TimerField
          :onChangeHandler="onChangeHandler"
          :value="timer.s"
          :max="59"
          type="s"
        />
      </div>
      <div class="buttons">
        <button>Start</button>
        <button>Reset</button>
      </div>
    </form>
  </div>
</template>
