import { useState } from "react";
import axios, { type AxiosResponse } from "axios";
import type { ForecastData, Status, WeatherData } from "../types/weather";

export function useWeather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[] | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchForecastData = async (city: string) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`,
      );

      // console.log("Forecast data fetched successfully:", response.data);
      const forecastList: ForecastData[] = response.data.list
        .filter((item: any) => item.dt_txt.includes("12:00:00"))
        .map((item: any) => ({
          day: new Date(item.dt_txt).toLocaleDateString("en-US", {
            weekday: "short",
          }),
          temp: item.main.temp,
          icon: item.weather[0].icon,
        }));
      setForecastData(forecastList);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Error fetching forecast data",
      );
      throw error;
    }
  };

  const fetchData = async (city: string): Promise<void> => {
    setStatus("loading");
    try {
      const response: AxiosResponse<WeatherData> = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
      );

      // console.log("Weather data fetched successfully:", response.data);
      if (response.data) {
        await fetchForecastData(city);
      }
      setWeatherData(response.data);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setError(
        error instanceof Error ? error.message : "Error fetching weather data",
      );
      console.error("Error fetching weather data:", error);
    }
  };

  return {
    weatherData,
    forecastData,
    status,
    error,
    fetchData,
  };
}

export default useWeather;
