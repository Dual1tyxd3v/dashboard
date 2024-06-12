import { defineStore } from "pinia";
import ConfigApi, { DefaultConfig } from "./configAPI";
import { MediaLink, Note, Store } from "./types";
import { getNotes, saveNotes, removeNote } from "./utils/notes";
import { getLinks, setLinks } from "./utils/media";
import { AppStorage } from "./config";

export const useConfigStore = defineStore({
  id: "configStore",
  state: () => JSON.parse(ConfigApi.getConfig()),
  actions: {
    reset() {
      this.$state = JSON.parse(ConfigApi.getConfig());
    },
    hardReset() {
      this.$state = JSON.parse(JSON.stringify(DefaultConfig));
    },
    save() {
      ConfigApi.setConfig(JSON.stringify(this.$state));
    },
  },
});

export const useAppStore = defineStore({
  id: "appStore",
  state: (): Store => ({
    notes: getNotes().actual,
    expiredNotes: getNotes().expired,
    [AppStorage.YOUTUBE]: getLinks(AppStorage.YOUTUBE),
    [AppStorage.MUSIC]: getLinks(AppStorage.MUSIC),
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
    deleteLink(link: MediaLink, key: AppStorage) {
      if (this.activeLink?.url === link.url) {
        this.activeLink = null;
      }

      (this[key] as MediaLink[]) = (this[key] as MediaLink[]).filter(
        (storeLink) => storeLink.url !== link.url,
      );

      setLinks(this[key] as MediaLink[], key);
    },
    addLink(link: MediaLink, key: AppStorage) {
      (this[key] as MediaLink[]).push(link);

      setLinks(this[key] as MediaLink[], key);
    },
  },
});
