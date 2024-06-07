import { WeatherURL } from "./config";

export const getWeather = async () => {
  try {
    const resp = await fetch(WeatherURL);
    if (!resp.ok) {
      console.log(resp.statusText);
      return { data: null, error: resp.statusText };
    }

    const obj = await resp.json();
    
    const history = obj.forecast.forecastday.map(
      (day: { date: string; day: { avgtemp_c: number } }) => ({
        date: day.date,
        temp: day.day.avgtemp_c,
      }),
    );
    const data = {
      city: obj.location.name as string,
      temp: obj.current.temp_c as number,
      icon: obj.current.condition.icon as string,
      humidity: obj.current.humidity as number,
      pressure: obj.current.pressure_mb as number,
      history,
    };
    return { data, error: "" };
  } catch (e) {
    console.log(e);
    return { data: null, error: (e as Error).message };
  }
};
