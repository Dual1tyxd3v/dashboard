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
  return notes ? JSON.parse(notes) : [];
};

export const saveNotes = (notes: Note[]) => {
  localStorage.setItem(LocalStorage.NOTES, JSON.stringify(notes));
};

export const getFormElementStyle = (
  background1: string,
  background2: string,
  border: string,
) => {
  return `background-image:
      linear-gradient(${background1}, ${background2}),
      linear-gradient(
   to bottom right, ${border} 30%, transparent, ${border} 70%);
      background-clip: padding-box, border-box;
      background-size: cover;`;
};

export const getCurrentDate = () => new Date().toISOString().split("T")[0];
