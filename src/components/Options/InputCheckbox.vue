<script setup lang="ts">
import { computed } from "vue";
import { useConfigStore } from "../../store";

type Props = {
  name: string;
  visible: boolean;
};
defineProps<Props>();

const model = defineModel({ required: true });

const config = useConfigStore();

const getCheckboxBtnColor = computed(() => config.Colors.main);
</script>

<template>
  <input class="hidden" type="checkbox" name="" :id="name" v-model="model" />
  <label
    :for="name"
    :class="`my-checkbox $ relative block h-5 w-9 cursor-pointer rounded-full px-[2px] transition-all after:absolute after:left-[50%] after:top-[50%] after:h-[14px] after:w-[14px] after:translate-y-[-50%] after:rounded-full after:transition-all ${visible ? 'after:translate-x-left' : 'after:translate-x-right'}`"
    :style="`background-color: ${visible ? config.Colors.active : config.Colors.miniTitle};`"
  ></label>
</template>

<style scoped>
.my-checkbox::after {
  background-color: v-bind(getCheckboxBtnColor);
}
</style>
