import { defineStore } from "pinia";
import ConfigApi from "./configAPI";

import { MediaLink, Note, Store } from "./types";
import { getNotes, saveNotes, removeNote } from "./utils/notes";
import { getLinks, setLinks } from "./utils/media";
import { LocalStorage } from "./config";

export const useConfigStore = defineStore({
  id: "configStore",
  state: () => ({ ...ConfigApi.getConfig() }),
});

export const useAppStore = defineStore({
  id: "appStore",
  state: (): Store => ({
    notes: getNotes().actual,
    expiredNotes: getNotes().expired,
    [LocalStorage.YOUTUBE]: getLinks(LocalStorage.YOUTUBE),
    activeLink: null,
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
    deleteLink(link: MediaLink, key: string) {
      if (this.activeLink?.url === link.url) {
        this.activeLink = null;
      }

      let newMediaLinks = null;

      if (key === LocalStorage.YOUTUBE) {
        this[LocalStorage.YOUTUBE] = this[LocalStorage.YOUTUBE].filter(
          (storeLink) => storeLink.url !== link.url,
        );
        newMediaLinks = [...this[LocalStorage.YOUTUBE]];
      }

      setLinks(newMediaLinks as MediaLink[], key);
    },
  },
});
