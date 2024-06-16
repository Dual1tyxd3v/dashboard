<script setup lang="ts">
import { useConfigStore } from "../../store";
import { FastLink } from "../../types";
import FormField from "./FormField.vue";
import Hint from "./Hint.vue";
import InputColor from "./InputColor.vue";
import InputText from "./InputText.vue";
import Button from "../Button.vue";

type Props = {
  link: FastLink;
  deleteLink: () => void;
};
defineProps<Props>();

const model = defineModel<FastLink>({ required: true });

const config = useConfigStore();
</script>

<template>
  <div class="relative w-full">
    <FormField>
      <p>Label</p>
      <InputText type="text" :name="link.name" v-model="model.name" />
    </FormField>
    <FormField>
      <p>URL</p>
      <InputText type="text" :name="link.name" v-model="model.url" />
    </FormField>
    <FormField>
      <p>Icon name</p>
      <InputText type="text" :name="link.name" v-model="model.icon" />
    </FormField>
    <Hint
      >you can select icon here ->
      <a
        class="font-bold not-italic underline"
        href="https://oh-vue-icons.js.org/"
        target="_blank"
        :style="`color: ${config.Colors.active}`"
        >Vue Icons</a
      >. Just enter the icon name</Hint
    >
    <FormField>
      <p>Icon Color</p>
      <InputColor :name="link.name" v-model="model.color" />
    </FormField>
    <Button type="button" @click="deleteLink">Delete link</Button>
  </div>
</template>
