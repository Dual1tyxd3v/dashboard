import { AppStorage } from "../config";
import { MediaLink, NewGame } from "../types";

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

// MUSIC

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

// GAMES

const getLocalFreeGames = () => {
  return localStorage.getItem(AppStorage.FREE_GAMES) || "[]";
};

export const newFreeGamesAmount = (games: NewGame[]) => {
  const localGames = getLocalFreeGames();

  return games.reduce((a, b) => {
    if (!localGames.includes(JSON.stringify(b))) a++;

    return a;
  }, 0);
};

export const setLocalFreeGames = (games: NewGame[]) => {
  localStorage.setItem(AppStorage.FREE_GAMES, JSON.stringify(games));
};
