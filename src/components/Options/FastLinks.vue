<script setup lang="ts">
import { ref } from "vue";
import Form from "./Form.vue";
import { useConfigStore } from "../../store";
import FastLinkItem from "./FastLinkItem.vue";
import { FastLink } from "../../types";
import { getDividerBackground } from "../../utils/styles";
import { MAX_FAST_LINKS } from "../../config";

const config = useConfigStore();

const formData = ref<FastLink[]>(config.FastLinks);

function onDelete(index: number) {
  config.FastLinks.splice(index, 1);
}

function addLink() {
  config.FastLinks.push({
    name: "",
    icon: "",
    color: "#c1c1c1",
    url: "",
  });
}
</script>

<template>
  <Form class="gap-2">
    <template v-for="(item, i) in formData" :key="`${item}`">
      <FastLinkItem
        :link="item"
        :index="i"
        v-model="formData[i]"
        :deleteLink="() => onDelete(i)"
      />
      <div
        v-if="formData.length"
        class="bg w-full bg-[length:100%_1px] bg-center bg-no-repeat py-2"
        :style="getDividerBackground(config.Colors.divider)"
      ></div>
    </template>
    <button
      v-if="config.FastLinks.length < MAX_FAST_LINKS"
      @click="addLink"
      class="mb-3 ml-auto flex items-center rounded-2xl opacity-70 transition-opacity hover:opacity-100"
      type="button"
    >
      <v-icon class="mr-3" name="px-add-box-multiple" scale="1.5" />
      Add new link
    </button>
  </Form>
</template>
