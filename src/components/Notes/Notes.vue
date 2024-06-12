<script setup lang="ts">
import NewNote from "./NewNote.vue";
import Note from "./Note.vue";
import { computed, ref } from "vue";
import { useConfigStore, useAppStore } from "../../store";
import Message from "../Message.vue";

const store = useConfigStore();
const notes = useAppStore();
const showForm = ref(false);

const background = computed(
  () =>
    `linear-gradient(175.70deg, ${store.backgroundImage?.block[0]} 12.226%,${store.backgroundImage?.block[1]} 113.851%)`,
);

function onclickHandler(e: Event) {
  const note = (e.target as HTMLElement).closest('div[data-js="note"]');
  if (note) return;

  showForm.value = true;
}
</script>

<template>
  <Transition name="message">
    <Message
      v-if="notes.expiredNotes.length"
      :message="`Note - '${notes.expiredNotes[notes.expiredNotes.length - 1].label}' is expired.`"
      :onClick="() => notes.deleteExpiredNote()"
    />
  </Transition>
  <Transition name="form">
    <NewNote v-if="showForm" :closeForm="() => (showForm = false)" />
  </Transition>
  <div
    class="wrapper relative flex-grow cursor-pointer overflow-hidden rounded-2xl py-4"
    :style="`color: ${store.colors?.main}`"
    @click="onclickHandler"
  >
    <p class="text-center" v-if="!notes.notes.length">There is no notes yet.</p>
    <div class="mb-3 flex flex-wrap items-center justify-center gap-3">
      <transition-group name="notes" move-class="notes-move">
        <Note
          v-for="(note, i) in notes.notes"
          :key="`note_${i}_${note.time}`"
          :note="note"
        />
      </transition-group>
    </div>

    <p class="text-center">Click on the field to add a new note</p>
  </div>
</template>

<style scoped>
.wrapper::before {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background-image: v-bind(background);
  opacity: 0;
  transition: opacity 0.2s;
}
.wrapper:hover::before {
  opacity: 1;
}

.notes-enter-from,
.notes-leave-to {
  transform: scale(0);
}
.notes-enter-active,
.notes-leave-active {
  transition: transform 0.2s ease-in-out;
}
.notes-move {
  transition: all 0.2s;
}
</style>
