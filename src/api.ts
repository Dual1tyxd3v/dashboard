import { ALL_CURRENCIES_URL, FREE_GAMES_URL, WeatherURL } from "./config";

const CURRENCY_API_KEY = "fca_live_nkgJCR6VcRSHvwF1Ktqe5nuamdeVMIV3zFLSiiRT";

export const getWeather = async () => {
  try {
    const resp = await fetch(WeatherURL);
    if (!resp.ok) {
      console.log(resp);
      return { data: null, error: `Cant load ${WeatherURL}` };
    }

    const data = await resp.json();

    return { data: data.data, error: "" };
  } catch (e) {
    console.log(e);
    return { data: null, error: (e as Error).message };
  }
};

export const getCurrencies = async (url: string) => {
  try {
    const resp = await fetch(url, {
      headers: {
        apiKey: CURRENCY_API_KEY,
        base_currency: "RUB",
        currencies: "EUR, USD",
      },
    });
    if (!resp.ok) {
      return { data: null, error: "Cant load currency" };
    }

    const { data } = await resp.json();
    return {
      data,
      error: "",
    };
  } catch (e) {
    console.log(e);
    return { data: null, error: (e as Error).message };
  }
};

export const getAllCurrencies = async () => {
  try {
    const resp = await fetch(ALL_CURRENCIES_URL, {
      headers: {
        apiKey: CURRENCY_API_KEY,
      },
    });
    if (!resp.ok) {
      console.log(resp.statusText);
      return { data: [], error: resp.statusText };
    }

    const data = await resp.json();

    return { data: Object.keys(data.data), error: "" };
  } catch (e) {
    console.log(e);
    return { data: [], error: (e as Error).message };
  }
};

export const getFreeGames = async () => {
  try {
    const resp = await fetch(FREE_GAMES_URL);
    if (!resp.ok) {
      console.log(resp);
      return { data: null, error: "Cant load free games" };
    }

    const data = await resp.json();

    return data;
  } catch (e) {
    console.log(e);
    return { data: [], error: (e as Error).message };
  }
};
