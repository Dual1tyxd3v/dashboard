<script setup lang="ts">
import { ref } from "vue";
import { useAppStore, useConfigStore } from "../store";
import { getMatch, checkYoutubeURL } from "../utils/media";
import FormField from "./FormField.vue";
import FormTitle from "./FormTitle.vue";
import Modal from "./Modal.vue";
import Button from "./Button.vue";
import Message from "./Message.vue";
import { AppStorage } from "../config";
import { MediaLink, Store } from "../types";

type Props = {
  closeForm: () => void;
  type: AppStorage;
};

const props = defineProps<Props>();

const configStore = useConfigStore();
const appStore = useAppStore();

const formData = ref({ label: "", url: "" });
const error = ref("");

function onChangeHandler(e: Event) {
  const input = e.target as HTMLInputElement;
  const value = input.value;
  const key = input.dataset.js as string;

  formData.value = { ...formData.value, [key]: value };
}

function onSumbitHanlder() {
  if (
    props.type === AppStorage.YOUTUBE &&
    !checkYoutubeURL(formData.value.url)
  ) {
    error.value = "Incorrect URL";
    return;
  }

  const matchResult = getMatch(
    appStore[props.type as keyof Store] as MediaLink[],
    formData.value,
  );
  if (matchResult) {
    error.value = `
    Label or Url must be unique<br>
    You already have - ${matchResult.label} with ${matchResult.url}`;
    return;
  }
  console.log(formData.value);

  appStore.addLink(formData.value, props.type);
  props.closeForm();
}
</script>

<template>
  <Modal :closeForm="closeForm">
    <Message v-if="error" :message="error" :onClick="() => (error = '')" />
    <form
      class="p-5"
      :style="`color: ${configStore.colors.main}`"
      @submit.prevent="onSumbitHanlder"
    >
      <FormTitle> Add new link </FormTitle>
      <FormField
        :changeHandler="onChangeHandler"
        :value="formData.label"
        type="text"
        label="label"
        :required="true"
      />
      <FormField
        :changeHandler="onChangeHandler"
        :value="formData.url"
        type="text"
        label="url"
        :required="true"
      />
      <Button>Add link</Button>
    </form>
  </Modal>
</template>
