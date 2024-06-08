import { LocalStorage } from "./config";
import { ConfigType } from "./types";

const DefaultConfig = {
  colors: {
    icon: "rgb(0, 117, 255)",
    "bg-main": "#060B26",
    "bg-nav--active": "rgb(26, 31, 55)",
    "input-bg": "rgb(15, 21, 53)",
    "input-border": "rgba(226, 232, 240, 0.3)",
    active: "rgb(44, 217, 255)",
    miniTitle: "rgb(160, 174, 192)",
    gridColor: "rgba(255, 255, 255, .2)",
    labelColor: "#fff",
    main: "#fff",
  },
  backgroundImage: {
    blur: "100",
    main: "/imgs/bg.jpeg",
    "bg-nav": ["rgba(6, 11, 38, 0.94)", "rgba(26, 31, 55, 0)"],
    divider: "#E0E1E2",
    block: ["rgba(6, 11, 40, 0.74)", "rgba(10, 14, 35, 0.71)"],
    "mini-block":
      "linear-gradient(175.70deg, rgb(6, 12, 41) 14.588%,rgba(4, 12, 48, 0.5) 110.513%)",
    formWrapper: ["rgb(15, 18, 59)", "rgb(9, 13, 46)", "rgb(2, 5, 21)"],
    form: "linear-gradient(92.67deg, rgba(255, 255, 255, 0) -39.666%, rgba(255, 255, 255, 0.04) 94.679%)",
  },
  fastLinks: [
    {
      name: "VK",
      url: "https://vk.com/feed",
      icon: "fa-vk",
      color: "rgb(0, 117, 255)",
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
      color: "rgb(0, 117, 255)",
    },
  ],
  currency: {
    base: "RUB",
    query: "USD,EUR",
  },
};

class Config {
  config: null | ConfigType = null;

  constructor() {
    const localConfig = localStorage.getItem(LocalStorage.CONFIG);
    this.config = localConfig ? JSON.parse(localConfig) : DefaultConfig;
  }

  getConfig() {
    return this.config;
  }

  setConfig(config: ConfigType) {
    this.config = config;
    localStorage.setItem(LocalStorage.CONFIG, JSON.stringify(config));
  }
}

const ConfigApi = new Config();
export default ConfigApi;
