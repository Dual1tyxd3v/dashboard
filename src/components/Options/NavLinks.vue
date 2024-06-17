<script setup lang="ts">
import { ref } from "vue";
import Form from "./Form.vue";
import { useConfigStore } from "../../store";
import FormField from "./FormField.vue";
import InputCheckbox from "./InputCheckbox.vue";

const config = useConfigStore();

const formData = ref(config.NavLinks);

function reset() {
  formData.value = config.NavLinks;
}
</script>

<template>
  <Form :onReset="reset">
    <FormField v-for="([name, route], i) in formData" :key="name">
      <p
        :class="`capitalize transition-opacity ${route.visible ? 'opacity-100' : 'opacity-60'}`"
      >
        {{ name }}
      </p>
      <InputCheckbox
        :name="name"
        :visible="route.visible"
        v-model="formData[i][1].visible"
      />
    </FormField>
  </Form>
</template>
