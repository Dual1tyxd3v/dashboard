<script setup lang="ts">
import Currency from "../components/Currency.vue";
import SearchBar from "../components/SearchBar.vue";
import Weather from "../components/Weather.vue";
import Notes from "../components/Notes.vue";
import Message from "../components/Message.vue";
import { useAppStore } from "../store";

const notes = useAppStore();
</script>

<template>
  <Transition name="message">
    <Message
      v-if="notes.expiredNotes.length"
      :message="`Note - '${notes.expiredNotes[notes.expiredNotes.length - 1].label}' is expired.`"
      :onClick="() => notes.deleteExpiredNote()"
    />
  </Transition>
  <div class="flex flex-grow flex-col gap-4">
    <SearchBar />
    <div class="gap-6 md:flex">
      <Weather />
      <Currency />
    </div>
    <Notes />
  </div>
</template>

<style scoped>
.message-enter-from {
  opacity: 0;
  transform: translateX(-50vw);
}
.message-leave-to {
  opacity: 0;
  transform: translateX(50vw);
}
.message-enter-active,
.message-leave-active {
  transition:
    opacity 0.2s ease-in-out,
    transform 0.2s ease-in-out;
}
</style>
