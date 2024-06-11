import { AppStorage } from "../config";
import { Note } from "../types";

export const getNotes = () => {
  const notes = localStorage.getItem(AppStorage.NOTES);
  if (!notes)
    return {
      actual: [],
      expired: [],
    };

  const localNotes = JSON.parse(notes);
  const actual: Note[] = [];
  const expired: Note[] = [];

  localNotes.forEach((note: Note) => {
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
    (existNote: Note) => existNote.id !== note.id,
  );
  localStorage.setItem("notes", JSON.stringify(newNotes));
};

export const saveNotes = (notes: Note[]) => {
  localStorage.setItem(AppStorage.NOTES, JSON.stringify(notes));
};
