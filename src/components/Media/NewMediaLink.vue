<script setup lang="ts">
import { ref } from "vue";
import { useAppStore, useConfigStore } from "../../store";
import { getMatch, checkURL, yandexMusicURLParser } from "../../utils/media";
import FormField from "../Form/FormField.vue";
import FormTitle from "../Form/FormTitle.vue";
import Modal from "../Modal.vue";
import Button from "../Button.vue";
import Message from "../Message.vue";
import { AppStorage } from "../../config";
import { MediaLink, Store } from "../../types";
import { useRoute } from "vue-router";
import Hint from "../Options/Hint.vue";
import { getHint } from "../../utils/media";

type Props = {
  closeForm: () => void;
  type: AppStorage;
};
const props = defineProps<Props>();

const configStore = useConfigStore();
const appStore = useAppStore();

const route = useRoute();

const formData = ref({ label: "", url: "" });
const error = ref("");

function onChangeHandler(e: Event) {
  const input = e.target as HTMLInputElement;
  const value = input.value;
  const key = input.dataset.js as string;

  formData.value = { ...formData.value, [key]: value };
}

function onSumbitHanlder() {
  if (!checkURL(formData.value.url, props.type)) {
    error.value = "Incorrect URL";
    return;
  }

  const link = formData.value.url.includes("music.yandex.ru")
    ? yandexMusicURLParser(formData.value.url)
    : formData.value.url;
  if (!link) {
    error.value = "Incorrect value";
    return;
  }

  const newMedia = {
    label: formData.value.label,
    url: link,
  };

  const matchResult = getMatch(
    appStore[props.type as keyof Store] as MediaLink[],
    newMedia,
  );
  if (matchResult) {
    error.value = `
    Label or Url must be unique<br>
    You already have - ${matchResult.label} with ${matchResult.url}`;
    return;
  }

  appStore.addLink(newMedia, props.type);
  appStore.activeLink = newMedia;
  props.closeForm();
}
</script>

<template>
  <Modal :closeForm="closeForm">
    <Message v-if="error" :message="error" :onClick="() => (error = '')" />
    <form
      class="p-5"
      :style="`color: ${configStore.Colors.main}`"
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
      <Button class="mb-2">Add link</Button>
      <Hint>{{ getHint(route.fullPath) }}</Hint>
    </form>
  </Modal>
</template>
