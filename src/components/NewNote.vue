<script setup lang="ts">
import { ref } from "vue";
import { useConfigStore, useAppStore } from "../store";

import FormField from "./FormField.vue";
import Button from "./Button.vue";
import { getFormElementStyle } from "../utils/styles";
import { getCurrentDate, getTime } from "../utils/timeAndDate";

const store = useConfigStore();
const notesStore = useAppStore();

const formData = ref({
  label: "",
  date: getCurrentDate(),
  time: getTime(new Date().getTime()).slice(0, -3),
});

const props = defineProps({
  closeForm: {
    type: Function,
    required: true,
  },
});

function onClickHandler(e: Event) {
  if ((e.target as HTMLDivElement).dataset.js !== "wrapper") return;

  props.closeForm();
}

function onSumbitHanlder(e: Event) {
  e.preventDefault();
  const time = new Date(
    `${formData.value.date} ${formData.value.time}`,
  ).getTime();

  if (time - new Date().getTime() <= 0) {
    return;
  }
  notesStore.addNote({
    label: formData.value.label,
    time,
    id: new Date().getTime(),
  });
  props.closeForm();
}

function onChangeHandler(e: Event) {
  const input = e.target as HTMLInputElement;
  const value = input.value;
  const key = input.dataset.js as string;

  formData.value = { ...formData.value, [key]: value };
}
</script>

<template>
  <div
    @click="onClickHandler"
    class="fixed inset-0 z-10 flex items-center justify-center"
    data-js="wrapper"
  >
    <div
      class="relative z-10 h-96 w-96 overflow-hidden rounded-2xl border-[3px] border-transparent bg-origin-border"
      :style="
        getFormElementStyle(
          store.colors?.inputBg || '#000',
          store.colors?.inputBg || '#000',
          store.colors?.fromElementsBorder || '#fff',
        )
      "
    >
      <form
        @submit="onSumbitHanlder"
        class="p-5"
        :style="`color: ${store.colors?.main}`"
      >
        <h3
          class="mb-4 bg-[length:100%_1px] bg-bottom bg-no-repeat pb-2 text-center text-2xl"
          :style="`background-image: linear-gradient(to right, transparent, ${store.backgroundImage?.divider}, transparent);`"
        >
          New note
        </h3>
        <FormField
          :changeHandler="onChangeHandler"
          :value="formData.label"
          type="text"
          label="label"
          :required="true"
        />
        <FormField
          :changeHandler="onChangeHandler"
          :value="formData.date"
          type="date"
          label="date"
          :required="true"
        />
        <FormField
          :changeHandler="onChangeHandler"
          :value="formData.time"
          type="time"
          label="time"
        />
        <Button>Add note</Button>
      </form>
    </div>
  </div>
</template>
