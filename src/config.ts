export const AppRoute = {
  Main: {
    route: "/",
    icon: "",
  },
  Music: {
    route: "/music",
    icon: "bi-music-note",
  },
  YouTube: {
    route: "/youtube",
    icon: "bi-youtube",
  },
  Games: {
    route: "/games",
    icon: "io-game-controller",
  },
};

export const WeatherURL = "https://moexapi.vercel.app/weather";
export const SEARCH_URL = "https://www.google.com/search?q=";
export const ALL_CURRENCIES_URL =
  "https://api.freecurrencyapi.com/v1/currencies";

export const getChartConfig = (mainColor: string, gridColor: string) => ({
  plugins: {
    legend: {
      display: true,
      labels: {
        color: mainColor,
      },
    },
  },
  datasets: {
    line: {
      borderWidth: 1.5,
    },
  },
  scales: {
    x: {
      grid: {
        color: gridColor,
      },
      ticks: {
        color: mainColor,
      },
    },
    y: {
      grid: {
        color: gridColor,
      },
      ticks: {
        color: mainColor,
      },
    },
  },
});

export const ConfigStorage = "config";

export const MAX_CHARS = 15;
export const MAX_CURRENCIES = 4;

export enum AppStorage {
  NOTES = "notes",
  YOUTUBE = "youtube",
  MUSIC = "music",
}

export enum OptionsTabs {
  BACKGROUND = "Background",
  COLORS = "Colors",
  FAST_LINKS = "FastLinks",
  NAV_LINKS = "NavLinks",
  CURRENCY = "Currency",
}

export const OPTIONS_COLORS = [
  { name: "icon", label: "Icons", hint: "", colors: 1 },
  {
    name: "bgNavActive",
    label: "Navigation active tab background",
    hint: "",
    colors: 1,
  },
  { name: "inputBg", label: "Input background", hint: "", colors: 1 },
  { name: "inputBorder", label: "Input border", hint: "", colors: 1 },
  {
    name: "active",
    label: "active",
    hint: "active items, chart average line, outline on active items",
    colors: 1,
  },
  { name: "main", label: "Text main", hint: "", colors: 1 },
  { name: "miniTitle", label: "Text secondary", hint: "", colors: 1 },
  { name: "gridColor", label: "Chart grid", hint: "", colors: 1 },
  { name: "chartMin", label: "Chart minimum line", hint: "", colors: 1 },
  {
    name: "formElementsBorder",
    label: "Form elements border",
    hint: "",
    colors: 1,
  },
  { name: "activeMedia", label: "Active media link", hint: "", colors: 1 },
  { name: "divider", label: "Divider", hint: "", colors: 1 },
  {
    name: "bgNav",
    label: "Navigation background",
    hint: "linear gradient is used",
    colors: 2,
  },
  {
    name: "block",
    label: "Block background",
    hint: "linear gradient is used",
    colors: 2,
  },
];
