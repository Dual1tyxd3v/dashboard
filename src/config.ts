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
