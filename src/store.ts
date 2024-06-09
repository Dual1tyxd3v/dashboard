import { defineStore } from "pinia";
import ConfigApi from "./configAPI";
import { getNotes, saveNotes } from "./utils";
import { Note } from "./types";

export const useConfigStore = defineStore({
  id: "configStore",
  state: () => ({ ...ConfigApi.getConfig() }),
});

export const useNotesStore = defineStore({
  id: "noteStore",
  state: () => ({
    notes: getNotes(),
  }),
  actions: {
    addNote(note: Note) {
      this.notes.push(note);
      saveNotes(this.notes);
    },
  },
});
