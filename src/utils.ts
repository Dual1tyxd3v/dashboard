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
  if (!notes)
    return {
      actual: [],
      expired: [],
    };

  const localNotes = JSON.parse(notes);
  const actual: Note[] = [];
  const expired: Note[] = [];

  localNotes.forEach((note: Note) => {
    console.log(new Date(note.time));
    if (note.time - new Date().getTime() > 0) {
      actual.push(note);
    } else {
      expired.push(note);
    }
  });

  return { actual, expired };
};

export const removeNote = (note: Note) => {
  const notes = localStorage.getItem("notes");
  if (!notes) return;

  const newNotes = JSON.parse(notes).filter(
    (existNote: Note) =>
      existNote.label !== note.label && existNote.time !== note.time,
  );
  localStorage.setItem("notes", JSON.stringify(newNotes));
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

export const getCurrentDate = () => {
  const date = new Date();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  return `${date.getFullYear()}-${month}-${date.getDate()}`;
};
