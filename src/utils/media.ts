import { AppStorage } from "../config";
import { MediaLink } from "../types";

export const getLinks = (storageName: string): MediaLink[] => {
  const localLinks = localStorage.getItem(storageName);
  if (!localLinks) return [];

  return JSON.parse(localLinks);
};

export const setLinks = (links: MediaLink[], storageName: string) => {
  localStorage.setItem(storageName, JSON.stringify(links));
};

export const getMatch = (links: MediaLink[], link: MediaLink) => {
  for (let i = 0; i < links.length; i++) {
    if (links[i].label === link.label || links[i].url === link.url) {
      return links[i];
    }
  }

  return false;
};

export const checkURL = (url: string, type: AppStorage) => {
  return type === AppStorage.YOUTUBE
    ? !!url.match(/^https:\/\/www.youtube.com/i)
    : !!url.match(/^https:\/\//i);
};

export const yandexMusicURLParser = (url: string) => {
  if (url.includes("/iframe/")) return url;

  const [name, id] = url.split("users/")[1].split("/playlists/");
  if (!name || !id) return false;

  return `https://music.yandex.ru/iframe/playlist/${name}/${id}`;
};
