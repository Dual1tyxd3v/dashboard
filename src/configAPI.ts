import { ConfigStorage } from "./config";
import { ConfigType } from "./types";

export const DefaultConfig: ConfigType = {
  Colors: {
    icon: "rgb(0, 117, 255)",
    bgNavActive: "rgb(26, 31, 55)",
    inputBg: "rgb(15, 21, 53)",
    inputBorder: "rgba(226, 232, 240, 0.3)",
    active: "rgb(44, 217, 255)",
    miniTitle: "rgb(160, 174, 192)",
    gridColor: "rgba(255, 255, 255, .2)",
    main: "#fff",
    fromElementsBorder: "#383838",
    activeMedia: "rgb(1, 181, 116)",
    divider: "#E0E1E2",
    bgNav: ["rgba(6, 11, 38, 0.94)", "rgba(26, 31, 55, 0)"],
    block: ["rgba(6, 11, 40, 0.74)", "rgba(10, 14, 35, 0.71)"],
    chartMin: "#E31A1A",
  },
  Background: {
    blur: "100",
    images: ["/imgs/bg.jpeg"],
    size: "cover",
    color: "#060B26",
  },
  FastLinks: [
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
  Currency: {
    base: "RUB",
    query: ["USD", "EUR"],
  },
};

class Config {
  config: ConfigType = DefaultConfig;

  constructor() {
    const localConfig = localStorage.getItem(ConfigStorage);
    if (localConfig) {
      this.config = JSON.parse(localConfig);
    }
  }

  getConfig() {
    return JSON.stringify(this.config);
  }

  setConfig(config: string) {
    this.config = JSON.parse(config);
    localStorage.setItem(ConfigStorage, config);
  }
}

const ConfigApi = new Config();
export default ConfigApi;
