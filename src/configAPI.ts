import { ConfigStorage } from "./config";
import { ConfigType } from "./types";

export const DefaultConfig: ConfigType = {
  Colors: {
    icon: "#0070FF",
    bgNavActive: "#1A1F37",
    inputBg: "#0F1535",
    inputBorder: "#e2e8f0",
    active: "#2CD9FF",
    miniTitle: "#A0AEC0",
    gridColor: "#ffffff",
    main: "#ffffff",
    formElementsBorder: "#383838",
    activeMedia: "#01b574",
    divider: "#E0E1E2",
    bgNav: ["#060b26", "#1a1f37"],
    block: ["#060b28", "#0a0e23"],
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
      color: "#0075ff",
      id: 1,
    },
    {
      name: "Whatsapp",
      url: "https://web.whatsapp.com/",
      icon: "bi-whatsapp",
      color: "#3c8b1f",
      id: 2,
    },
    {
      name: "Telegram",
      url: "https://web.telegram.org/k/",
      icon: "co-telegram-plane",
      color: "#0075ff",
      id: 3,
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
