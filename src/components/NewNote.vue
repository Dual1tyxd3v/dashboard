<script setup lang="ts">
import { ref } from "vue";
import { useConfigStore, useAppStore } from "../store";
import FormField from "./FormField.vue";
import Button from "./Button.vue";
import { getCurrentDate, getTime } from "../utils/timeAndDate";
import Modal from "./Modal.vue";
import Message from "./Message.vue";

const store = useConfigStore();
const notesStore = useAppStore();

const formData = ref({
  label: "",
  date: getCurrentDate(),
  time: getTime(new Date().getTime()).slice(0, -3),
});
const error = ref("");

const props = defineProps({
  closeForm: {
    type: Function,
    required: true,
  },
});

function onSumbitHanlder(e: Event) {
  e.preventDefault();
  const time = new Date(
    `${formData.value.date} ${formData.value.time}`,
  ).getTime();

  if (time - new Date().getTime() <= 0) {
    error.value = "Select correct date/time";
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
  <Message v-if="error" :message="error" :onClick="() => (error = '')" />
  <Modal :closeForm="closeForm">
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
  </Modal>
</template>
