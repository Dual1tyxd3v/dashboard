import { LocalStorage } from "./config";

export type Weather = {
  city: string;
  temp: number;
  humidity: number;
  pressure: number;
  icon: string;
  history: HistoryType[];
};

export type HistoryType = {
  date: string;
  temp: number;
};

type FastLink = {
  name: string;
  url: string;
  icon: string;
  color: string;
};

export type ConfigType = {
  colors: {
    icon: string;
    bgMain: string;
    bgNavActive: string;
    inputBg: string;
    inputBorder: string;
    active: string;
    miniTitle: string;
    gridColor: string;
    labelColor: string;
    main: string;
    fromElementsBorder: string;
    activeMedia: string;
  };
  backgroundImage: {
    blur: string;
    main: string;
    bgNav: string[];
    divider: string;
    block: string[];
  };
  fastLinks: FastLink[];
  currency: {
    base: string;
    query: string;
  };
};

export type Note = {
  label: string;
  time: number;
  id: number;
};

export type MediaLink = {
  url: string;
  label: string;
};

export type Store = {
  notes: Note[];
  expiredNotes: Note[];
  activeLink: null | MediaLink;
  [LocalStorage.YOUTUBE]: MediaLink[];
};
