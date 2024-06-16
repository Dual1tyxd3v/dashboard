<script setup lang="ts">
import { computed, ref } from "vue";
import { useConfigStore } from "../../store";
import FormField from "./FormField.vue";
import InputText from "./InputText.vue";
import Hint from "./Hint.vue";
import InputColor from "./InputColor.vue";
import Form from "./Form.vue";

const config = useConfigStore();

const initData = {
  color: config.Background.color,
  blur: config.Background.blur,
  images: config.Background.images.join(","),
  size: config.Background.size,
};

const formData = ref({ ...initData });

const getHoverColor = computed(() => config.Colors.active);

function onChangeHandler(e: Event) {
  const { value, name } = e.target as HTMLInputElement | HTMLTextAreaElement;

  if (name === "size") {
    if (!(e.target as HTMLInputElement).checked) return;

    formData.value.size = value as typeof config.Background.size;
    config.Background.size = formData.value.size;
    return;
  }

  if (name === "images") {
    config.Background.images = formData.value.images
      .replace(/ /g, "")
      .replace(/\n/g, "")
      .split(",");
    return;
  }

  if (name === "blur") {
    config.Background.blur = formData.value.blur;
    return;
  }

  config.Background.color = value;
}

function reset() {
  formData.value = { ...config.Background };
}
</script>

<template>
  <Form :onReset="reset">
    <FormField>
      <p>Background color</p>
      <InputColor
        name="color"
        v-model="formData.color"
        @input="onChangeHandler"
      />
    </FormField>
    <FormField>
      <p>Background size</p>
      <div class="flex w-60 justify-between">
        <div class="">
          <label for="cover" class="mr-1">Cover</label>
          <input
            type="radio"
            name="size"
            value="cover"
            id="cover"
            :style="`accent-color: ${config.Colors.active}`"
            @input="onChangeHandler"
            :checked="formData.size === 'cover'"
          />
        </div>
        /
        <div class="">
          <label for="contain" class="mr-1">Contain</label>
          <input
            type="radio"
            name="size"
            value="contain"
            id="contain"
            :style="`accent-color: ${config.Colors.active}`"
            @input="onChangeHandler"
            :checked="formData.size === 'contain'"
          />
        </div>
        /
        <div class="">
          <label for="100" class="mr-1">100%</label>
          <input
            type="radio"
            name="size"
            value="100% 100%"
            id="100"
            :style="`accent-color: ${config.Colors.active}`"
            @input="onChangeHandler"
            :checked="formData.size === '100% 100%'"
          />
        </div>
      </div>
    </FormField>
    <Hint>
      --cover - scales the image to the smallest possible size to fill the
      container<br />
      --contain - scales the image as large as possible without stretching<br />
      --100% - stretch the image to fill the container
    </Hint>
    <FormField>
      <p>Background blur</p>
      <InputText
        name="blur"
        type="number"
        @input="onChangeHandler"
        v-model="formData.blur"
      />
    </FormField>
    <Hint>Background blur in pixels. Just enter the number</Hint>
    <FormField>
      <p>Background images</p>
      <textarea
        class="input h-52 w-60 resize-none rounded-2xl border-2 px-3 py-1 outline-none"
        :style="`
          background-color: ${config.Colors.inputBg}; 
          border-color: ${config.Colors.inputBorder};
          color: ${config.Colors.main}`"
        v-model="formData.images"
        @input="onChangeHandler"
        name="images"
      ></textarea>
    </FormField>
    <Hint>
      You can insert a link to an image, or several, separated by commas. In the
      latter case, 1 random one will be selected
    </Hint>
  </Form>
</template>

<style scoped>
.input:focus {
  border-color: v-bind(getHoverColor) !important;
}
</style>
