import { LocalStorage } from "./config";
import { Note } from "./types";

export const getTime = (ms: number) => {
  const date = new Date(ms);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

export const getNotes = () => {
  const notes = localStorage.getItem(LocalStorage.NOTES);
  return notes ? JSON.parse(notes) : null;
};

export const saveNote = (note: Note) => {
  const notes = localStorage.getItem(LocalStorage.NOTES);
  const newNotes = notes ? [...JSON.parse(notes), note] : [note];

  localStorage.setItem(LocalStorage.NOTES, JSON.stringify(newNotes));
};
