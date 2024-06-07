import { WeatherURL } from "./config";

export const getWeather = async () => {
  try {
    const resp = await fetch(WeatherURL);
    if (!resp.ok) {
      console.log(resp.statusText);
      return { data: null, error: resp.statusText };
    }

    const obj = await resp.json();
    const data = {
      city: obj.location.name as string,
      temp: obj.current.temp_c as number,
      humidity: obj.current.humidity as number,
      pressure: obj.current.pressure_mb as number,
    };
    return { data, error: "" };
  } catch (e) {
    console.log(e);
    return { data: null, error: (e as Error).message };
  }
};
