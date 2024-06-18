import { AppStorage, ConfigStorage } from "../config";

export const createProfile = () => {
  const youtube = JSON.parse(localStorage.getItem(AppStorage.YOUTUBE) || "[]");
  const music = JSON.parse(localStorage.getItem(AppStorage.MUSIC) || "[]");
  const notes = JSON.parse(localStorage.getItem(AppStorage.NOTES) || "[]");
  const config = JSON.parse(localStorage.getItem(ConfigStorage) || "{}");

  return { youtube, config, music, notes };
};
