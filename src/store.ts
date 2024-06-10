import { defineStore } from "pinia";
import ConfigApi from "./configAPI";

import { Note } from "./types";
import { getNotes, saveNotes, removeNote } from "./utils/notes";

export const useConfigStore = defineStore({
  id: "configStore",
  state: () => ({ ...ConfigApi.getConfig() }),
});

export const useAppStore = defineStore({
  id: "noteStore",
  state: () => ({
    notes: getNotes().actual,
    expiredNotes: getNotes().expired,
  }),
  actions: {
    addNote(note: Note) {
      this.notes.push(note);
      saveNotes(this.notes);
    },
    deleteNote(note: Note) {
      this.notes = this.notes.filter((storeNote) => storeNote.id !== note.id);
      saveNotes(this.notes);
    },
    deleteExpiredNote() {
      const note = this.expiredNotes.pop();

      note && removeNote(note);
    },
  },
});
