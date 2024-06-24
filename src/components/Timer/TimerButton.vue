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
    <v-icon class="lg:scale-125 xl:scale-150" scale="1" :name="icon" />
  </button>
</template>
