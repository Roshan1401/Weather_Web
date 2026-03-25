import { useWeather } from "../hooks/useWeather";
import { SearchBar } from "./SearchBar";
import { CurrentWeather } from "./CurrentWeather";
import { WeatherMetrics } from "./WeatherMetrics";
import { ForecastSection } from "./ForecastSection";
import { useEffect } from "react";

export function WeatherDashboard() {
  const { weatherData, forecastData, status, fetchData } = useWeather();

  useEffect(() => {
    try {
      fetchData("Ahmedabad");
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  }, []);

  const handleSearch = (city: string) => {
    try {
      fetchData(city);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  return (
    // <div className="w-full min-h-screen py-4 px-8 bg-neutral-100 mx-auto">
    //   <SearchBar onSearch={handleSearch} />

    //   {status === "loading" && (
    //     <div className="mt-5 text-center text-gray-500">
    //       Loading weather data...
    //     </div>
    //   )}

    //   {status === "error" && (
    //     <div className="mt-5 text-center text-red-500">{error}</div>
    //   )}

    //   {status === "success" && weatherData && (
    //     <>
    //       <CurrentWeather weatherData={weatherData} />
    //       <WeatherMetrics weatherData={weatherData} />
    //       <ForecastSection forecastData={forecastData} />
    //     </>
    //   )}
    // </div>

    <div className="w-full rounded-4xl h-[96vh] py-3 px-10 bg-purple-100">
      <SearchBar onSearch={handleSearch} />
      {status === "success" && weatherData && (
        <>
          <CurrentWeather weatherData={weatherData} />
          <WeatherMetrics weatherData={weatherData} />
          <ForecastSection forecastData={forecastData} />
        </>
      )}
    </div>
  );
}
