<script setup lang="ts">
import NewNote from "./NewNote.vue";
import { computed, onMounted, ref } from "vue";
import { useConfigStore } from "../store";
import { getNotes } from "../utils";

const store = useConfigStore();
const notes = ref([]);
const showForm = ref(false);

const background = computed(
  () =>
    `linear-gradient(175.70deg, ${store.backgroundImage?.block[0]} 12.226%,${store.backgroundImage?.block[1]} 113.851%)`,
);

onMounted(() => {
  const localNotes = getNotes();
  if (localNotes) {
    notes.value = localNotes;
  }
});

function onclickHandler(e: Event) {
  e.stopPropagation();
  showForm.value = !showForm.value;
}
</script>

<template>
  <NewNote v-if="showForm" />
  <div
    class="wrapper relative flex-grow cursor-pointer overflow-hidden rounded-2xl"
    :style="`color: ${store.colors?.main}`"
    @click="onclickHandler"
  >
    <p class="py-4 text-center" v-if="!notes.length">There is no notes yet.</p>
    <div class="flex flex-wrap items-center justify-center" v-else></div>
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
</style>
