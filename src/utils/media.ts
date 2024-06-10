import { MediaLink } from "../types";

export const getLinks = (storageName: string): MediaLink[] => {
  const localLinks = localStorage.getItem(storageName);
  if (!localLinks) return [];

  return JSON.parse(localLinks);
};

export const setLinks = (links: MediaLink[], storageName: string) => {
  localStorage.setItem(storageName, JSON.stringify(links));
};
