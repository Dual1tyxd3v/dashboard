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

export const WeatherURL =
  "https://api.weatherapi.com/v1/forecast.json?key=c2bd7399878a459fb96104221240606&q=auto:ip&days=10";
export const SEARCH_URL = "https://www.google.com/search?q=";

const BASE_CURRENCY = "RUB";
const QUERY_CURRENCIES = "USD,EUR";
export const CURRENCY_API_URL = `https://api.freecurrencyapi.com/v1/latest?base_currency=${BASE_CURRENCY}&currencies=${QUERY_CURRENCIES}`;

export const getChartConfig = (
  activeColor: string,
  mainColor: string,
  gridColor: string,
) => ({
  plugins: {
    legend: {
      display: false,
    },
  },
  datasets: {
    line: {
      borderColor: activeColor,
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

export enum AppStorage {
  NOTES = "notes",
  YOUTUBE = "youtube",
  MUSIC = "music",
}
