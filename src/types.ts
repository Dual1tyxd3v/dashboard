import { AppStorage } from "./config";

export type Weather = {
  city: string;
  temp: number;
  humidity: string;
  pressure: number;
  icon: string;
  forecastTemp: ForecastTemp[];
};

export type ForecastTemp = {
  date: string;
  max: number;
  min: number;
  average: number;
};

type FastLink = {
  name: string;
  url: string;
  icon: string;
  color: string;
};

export type ConfigType = {
  Colors: {
    icon: string;
    bgNavActive: string;
    inputBg: string;
    inputBorder: string;
    active: string;
    miniTitle: string;
    gridColor: string;
    main: string;
    fromElementsBorder: string;
    bgNav: string[];
    divider: string;
    block: string[];
    activeMedia: string;
    chartMin: string;
  };
  Background: {
    color: string;
    blur: string;
    images: string[];
    size: "cover" | "contain" | "100% 100%";
  };
  FastLinks: FastLink[];
  Currency: {
    base: string;
    query: string[];
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
  [AppStorage.YOUTUBE]: MediaLink[];
  [AppStorage.MUSIC]: MediaLink[];
  allCurrencies: string[];
};

export type Currencies = {
  [propertyName: string]: number;
};
