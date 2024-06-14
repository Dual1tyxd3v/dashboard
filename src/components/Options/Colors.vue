<script setup lang="ts">
import { ref } from 'vue';
import { useConfigStore } from "../../store";
import Message from "../Message.vue";

const config = useConfigStore();

const message = ref("");
</script>

<template>
  <form class="h-full w-full p-3" :style="`color: ${config.Colors.main}`">
    <Message
      v-if="message"
      :message="message"
      :onClick="() => (message = '')"
    />
  </form>
</template>
