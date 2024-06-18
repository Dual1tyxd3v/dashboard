<script setup lang="ts">
import { ref } from "vue";
import { useConfigStore, useAppStore } from "../../store";
import { createProfile } from "../../utils/config";
import Form from "./Form.vue";
import Message from "../Message.vue";
import Hint from "./Hint.vue";
import { ConfigType } from "../../types";

const configStore = useConfigStore();
const appStore = useAppStore();

const profile = createProfile();

const message = ref("");
const fileName = ref("");

function onChangeHandler(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;

  fileName.value = file.name;

  function updateConfig(e: ProgressEvent<FileReader>) {
    const cfg = e?.target?.result;
    if (!cfg) return;

    const { config, youtube, music, notes } = JSON.parse(cfg as string);

    if (config.version !== configStore.version) {
      message.value = "Your profile is out of date";
      return;
    }

    configStore.update(config as ConfigType);
    appStore.updateStore(youtube, music, notes);

    reader.removeEventListener("load", updateConfig);
  }

  const reader = new FileReader();
  reader.addEventListener("load", updateConfig);

  reader.readAsText(file);
  (e.target as HTMLInputElement).value = "";
}

function reset() {
  fileName.value = "";
  appStore.resetStore();
}

function save() {
  appStore.saveStore();
}
</script>

<template>
  <Form :onReset="reset" :onSave="save">
    <Message
      v-if="message"
      :message="message"
      :onClick="() => (message = '')"
    />
    <div class="flex flex-col items-center gap-8">
      <input
        type="file"
        id="import"
        class="hidden"
        @input="onChangeHandler"
        accept=".json"
      />
      <label
        for="import"
        class="flex cursor-pointer items-center gap-3 opacity-70 hover:opacity-100"
        :style="`color: ${configStore.Colors.main};`"
      >
        <v-icon name="fa-file-import" />
        Import profile
      </label>
      <Hint v-if="fileName">{{ fileName }}</Hint>
      <a
        class="flex items-center gap-3 opacity-70 hover:opacity-100"
        :style="`color: ${configStore.Colors.main};`"
        :href="`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(profile))}`"
        download="profile.json"
        ><v-icon name="md-filepresent-round" />Export profile</a
      >
    </div>
  </Form>
</template>
