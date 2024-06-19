import { defineStore } from "pinia";
import ConfigApi, { DefaultConfig } from "./configAPI";
import { ConfigType, MediaLink, NewGame, Note, Store } from "./types";
import { getNotes, saveNotes, removeNote } from "./utils/notes";
import { getLinks, newFreeGamesAmount, setLinks } from "./utils/media";
import { AppStorage } from "./config";

export const useConfigStore = defineStore({
  id: "configStore",
  state: () => JSON.parse(ConfigApi.getConfig()) as ConfigType,
  actions: {
    reset() {
      this.$state = JSON.parse(ConfigApi.getConfig());
    },
    hardReset() {
      this.$state = JSON.parse(JSON.stringify(DefaultConfig));
      ConfigApi.setConfig(JSON.stringify(DefaultConfig));
    },
    save() {
      ConfigApi.setConfig(JSON.stringify(this.$state));
    },
    update(config: ConfigType) {
      this.$state = config;
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
    allCurrencies: [],
    message: "",
    newfreeGamesCount: 0,
    freeGames: null,
  }),
  actions: {
    updateStore(youtube: MediaLink[], music: MediaLink[], notes: Note[]) {
      this[AppStorage.YOUTUBE] = youtube;
      this[AppStorage.MUSIC] = music;
      this.notes = notes;
    },
    saveStore() {
      saveNotes(this.notes);
      setLinks(this.music, AppStorage.MUSIC);
      setLinks(this.youtube, AppStorage.YOUTUBE);
    },
    resetStore() {
      this.$reset();
    },
    updateFreeGames(games: NewGame[]) {
      this.freeGames = games;
      this.newfreeGamesCount = newFreeGamesAmount(games);
    },
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
