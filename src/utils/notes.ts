import { LocalStorage } from '../config';
import { Note } from '../types';

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
    (existNote: Note) => existNote.id !== note.id,
  );
  localStorage.setItem("notes", JSON.stringify(newNotes));
};

export const saveNotes = (notes: Note[]) => {
  localStorage.setItem(LocalStorage.NOTES, JSON.stringify(notes));
};