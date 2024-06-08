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

const DefaultIconColor = "rgb(0, 117, 255)";

export const fastLinks = [
  {
    name: "VK",
    url: "https://vk.com/feed",
    icon: "fa-vk",
    color: DefaultIconColor,
  },
  {
    name: "Whatsapp",
    url: "https://web.whatsapp.com/",
    icon: "bi-whatsapp",
    color: "#3c8b1f",
  },
  {
    name: "Telegram",
    url: "https://web.telegram.org/k/",
    icon: "co-telegram-plane",
    color: DefaultIconColor,
  },
];

export const WeatherURL =
  "https://api.weatherapi.com/v1/forecast.json?key=c2bd7399878a459fb96104221240606&q=auto:ip&days=10";
export const SEARCH_URL = "https://www.google.com/search?q=";

export const ChartConfig = {
  plugins: {
    legend: {
      display: false,
    },
  },
  datasets: {
    line: {
      borderColor: "rgb(44, 217, 255)",
      borderWidth: 1.5,
    },
  },
  elements: {
    point: {
      backgroundColor: "yellow",
    },
  },

  scales: {
    x: {
      grid: {
        color: "rgba(255, 255, 255, .2)",
      },
      ticks: {
        color: "#fff",
      },
    },
    y: {
      grid: {
        color: "rgba(255, 255, 255, .2)",
      },
      ticks: {
        color: "#fff",
      },
    },
  },
};
