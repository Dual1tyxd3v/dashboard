<script setup lang="ts">
type Props = {
  click: () => void;
  title: string;
  icon: string;
  activeStyle?: string | null;
};
defineProps<Props>();
</script>

<template>
  <button
    class="opacity-70 transition-all hover:opacity-100"
    type="button"
    :aria-label="title"
    :title="title"
    :style="activeStyle"
    @click="click"
  >
    <v-icon scale="1.7" :name="icon" />
  </button>
</template>
