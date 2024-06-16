<script setup lang="ts">
import { onUnmounted, ref } from "vue";
import { useAppStore, useConfigStore } from "../../store";
import { Note } from "../../types";
import { getRemainingTime } from "../../utils/timeAndDate";
import { getBlockBackground } from "../../utils/styles";

type Props = {
  note: Note;
};

const props = defineProps<Props>();

const configStore = useConfigStore();
const appStore = useAppStore();

const remainigTime = ref(getRemainingTime(props.note.time));

const timer = setInterval(() => {
  if (props.note.time - new Date().getTime() > 0) {
    remainigTime.value = getRemainingTime(props.note.time);
    return;
  }

  appStore.notes = appStore.notes.filter((note) => props.note.id !== note.id);
  appStore.expiredNotes.push(props.note);
}, 1000);

onUnmounted(() => clearInterval(timer));
</script>

<template>
  <div
    class="group relative w-52 rounded-2xl p-2 text-center"
    :style="
      getBlockBackground(
        configStore.Colors.block[0],
        configStore.Colors.block[1],
      )
    "
    data-js="note"
  >
    <button
      class="absolute right-2 top-2 opacity-0 transition duration-300 hover:scale-125 group-hover:opacity-100"
      title="Delete note"
      aria-label="Delete note"
      @click="appStore.deleteNote(note)"
    >
      <v-icon name="io-trash-bin" />
    </button>
    <p
      class="mb-2 text-lg capitalize"
      :style="`color: ${configStore.Colors.main}`"
    >
      {{ props.note.label }}
    </p>
    <p
      class="text-xl font-bold"
      :style="`color: ${configStore.Colors.active};`"
    >
      {{ remainigTime }}
    </p>
  </div>
</template>
