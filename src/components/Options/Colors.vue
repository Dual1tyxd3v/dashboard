<script setup lang="ts">
import { ref } from "vue";
import { useConfigStore } from "../../store";
import FormField from "./FormField.vue";
import InputColor from "./InputColor.vue";
import Hint from "./Hint.vue";
import Form from "./Form.vue";
import { ConfigColors } from "../../types";
import { OPTIONS_COLORS } from "../../config";

const config = useConfigStore();

const formData = ref<ConfigColors>(config.Colors);

function onChangeHandler(e: Event) {
  const { value, name } = e.target as HTMLInputElement;

  if (name.includes("_")) {
    const [key, index] = name.split("_");
    config.Colors[key][index] = value;

    return;
  }

  config.Colors[name] = value;
}

function reset() {
  formData.value = config.Colors;
}
</script>

<template>
  <Form :onReset="reset">
    <template
      v-for="{ name, hint, label, colors } in OPTIONS_COLORS"
      :key="`${name}`"
    >
      <FormField>
        <p>{{ label }}</p>
        <InputColor
          v-if="colors === 1"
          :name="name"
          v-model="formData[name as keyof typeof formData]"
          @input="onChangeHandler"
        />
        <div v-else class="flex w-60 gap-3">
          <InputColor
            :name="`${name}_0`"
            v-model="formData[name as keyof typeof formData][0]"
            @input="onChangeHandler"
          />
          <InputColor
            :name="`${name}_0`"
            v-model="formData[name as keyof typeof formData][1]"
            @input="onChangeHandler"
          />
        </div>
      </FormField>
      <Hint v-if="hint">{{ hint }}</Hint>
    </template>
  </Form>
</template>
