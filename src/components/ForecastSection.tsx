import type { ReactNode } from "react";
import type { ForecastData } from "../types/weather";
import {
  SunIcon,
  CloudyIcon,
  RainIcon,
  ThunderstormIcon,
  SnowIcon,
  FogIcon,
  PartlyCloudyNightIcon,
  MoonIcon,
} from "../Icons/icons";

export function ForecastSection({
  forecastData,
}: {
  forecastData: ForecastData[] | null;
}) {
  const getWeatherIcon = (iconCode: string): ReactNode => {
    if (iconCode.startsWith("01d")) {
      return <SunIcon />;
    }
    if (iconCode.startsWith("01n")) {
      return <MoonIcon />;
    }
    if (iconCode.startsWith("02d")) return <CloudyIcon />;
    if (iconCode.startsWith("02n")) return <PartlyCloudyNightIcon />;
    if (iconCode.startsWith("03")) return <CloudyIcon />;
    if (iconCode.startsWith("04")) return <CloudyIcon />;
    if (iconCode.startsWith("09")) return <RainIcon />;
    if (iconCode.startsWith("10")) return <RainIcon />;
    if (iconCode.startsWith("11")) return <ThunderstormIcon />;
    if (iconCode.startsWith("13")) return <SnowIcon />;
    if (iconCode.startsWith("50")) return <FogIcon />;
    return <SunIcon />;
  };

  return (
    <div className="bg-white border border-neutral-200 px-3 py-2 text-black rounded-2xl mt-3 ">
      <h2 className="text-purple-700 ml-7  text-lg font-bold ">
        5-DAY FORECAST
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 px-5 py-2">
        {forecastData &&
          forecastData.map((forecast, index) => (
            <div
              key={index}
              className={`flex ${index === 0 ? "bg-[#381385]" : "bg-neutral-100"} p-3 flex-col rounded-2xl items-center`}
            >
              <span
                className={` ${index === 0 ? "text-white" : "text-black"} font-bold tracking-tighter mb-3`}
              >
                {forecast?.day.toUpperCase()}
              </span>
              <span className="text-3xl mb-3">
                {forecast?.icon ? getWeatherIcon(forecast.icon) : "❓"}
              </span>
              <span
                className={`font-bold text-lg ${index === 0 ? "text-white" : "text-black"}`}
              >
                {forecast?.temp}°
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
