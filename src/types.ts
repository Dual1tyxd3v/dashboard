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
