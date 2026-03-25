import type { WeatherData } from "../types/weather";
import bgImage from "../assets/image.png";
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

export function CurrentWeather({ weatherData }: { weatherData: WeatherData }) {
  const getWeatherIcon = (iconCode: string) => {
    if (iconCode.startsWith("01d")) return <SunIcon size={64} />;
    if (iconCode.startsWith("01n")) return <MoonIcon size={64} />;
    if (iconCode.startsWith("02d")) return <CloudyIcon size={64} />;
    if (iconCode.startsWith("02n")) return <PartlyCloudyNightIcon size={64} />;
    if (iconCode.startsWith("03")) return <CloudyIcon size={64} />;
    if (iconCode.startsWith("04")) return <CloudyIcon size={64} />;
    if (iconCode.startsWith("09")) return <RainIcon size={64} />;
    if (iconCode.startsWith("10")) return <RainIcon size={64} />;
    if (iconCode.startsWith("11")) return <ThunderstormIcon size={64} />;
    if (iconCode.startsWith("13")) return <SnowIcon size={64} />;
    if (iconCode.startsWith("50")) return <FogIcon size={64} />;
    return <SunIcon size={64} />;
  };

  return (
    <div
      className="h-80 relative w-full mt-5 rounded-2xl p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div>
        <div className="text-white absolute top-6 right-6">
          {weatherData.weather[0] &&
            getWeatherIcon(weatherData.weather[0].icon)}
        </div>
        <div className="text-white  absolute bottom-5 gap-3 flex flex-col">
          <h1 className="text-6xl font-bold">{weatherData.main.temp}°C</h1>
          <div className="flex gap-2">
            <span className="text-lg font-semibold">{weatherData.name}</span>
            <span className="text-lg font-semibold">,</span>
            <span className="text-lg font-semibold">
              {weatherData.sys?.country || "N/A"}
            </span>
          </div>
          <span className="text-md bg-white/20 backdrop-blur-md  border border-white/25 rounded-full  p-2 w-fit  px-3.5 py-1 text-xs font-medium text-white tracking-wide capitalize">
            {weatherData.weather[0]?.description || "Clear"}
          </span>
        </div>
      </div>
    </div>
  );
}
