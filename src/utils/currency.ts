import { Currencies } from "../types";

export const getCurrencyExchangeURL = (base: string, exchange: string[]) =>
  `https://api.freecurrencyapi.com/v1/latest?base_currency=${base}&currencies=${exchange}`;

export const formatValues = (currencies: Currencies) => {
  const copy = { ...currencies };

  for (let k in copy) {
    copy[k] = +(1 / copy[k]).toFixed(2);
  }

  return copy;
};
