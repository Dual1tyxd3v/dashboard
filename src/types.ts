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
    "bg-main": string;
    "bg-nav--active": string;
    "input-bg": string;
    "input-border": string;
    active: string;
    miniTitle: string;
    gridColor: string;
    labelColor: string;
    main: string;
  };
  backgroundImage: {
    blur: string;
    main: string;
    "bg-nav": string[];
    divider: string;
    block: string[];
    "mini-block": string;
    formWrapper: string[];
    form: string[];
  };
  fastLinks: FastLink[];
  currency: {
    base: string;
    query: string;
  };
};

export type Note = {
  label: string;
  date: number;
  time?: number;
};
