import type { WeatherData } from "../types/weather";

const HumidityIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path
      d="M24 8 C24 8 18 18 18 26 C18 33.732 20.686 40 24 40 C27.314 40 30 33.732 30 26 C30 18 24 8 24 8 Z"
      fill="#5B9BD5"
    />
  </svg>
);

const WindSpeedIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path
      d="M8 20 Q20 16 28 20 Q36 24 28 28 Q20 32 12 28"
      stroke="#78909C"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M8 30 Q18 26 26 30 Q34 34 26 38 Q18 42 10 38"
      stroke="#78909C"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const TemperatureIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect
      x="20"
      y="8"
      width="8"
      height="20"
      fill="none"
      stroke="#F57C00"
      strokeWidth="2"
    />
    <circle cx="24" cy="32" r="6" fill="#F57C00" />
    <line x1="24" y1="12" x2="24" y2="18" stroke="#F57C00" strokeWidth="2" />
  </svg>
);

export function WeatherMetrics({ weatherData }: { weatherData: WeatherData }) {
  return (
    <div className="bg-white border border-neutral-200 w-full mt-3 p-4 rounded-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
      <div className="flex items-center gap-3 py-3 md:px-4">
        <div className="p-3 rounded-lg border border-neutral-200 bg-blue-50">
          <HumidityIcon size={32} />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm">Humidity</span>
          <span className="text-black font-semibold text-lg">
            {weatherData.main.humidity}%
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 py-3 md:px-4">
        <div className="p-3 rounded-lg border border-neutral-200 bg-blue-50">
          <WindSpeedIcon size={32} />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm">Wind Speed</span>
          <span className="text-black font-semibold text-lg">
            {(weatherData.wind.speed * 3.6).toFixed(1)} km/h
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 py-3 md:px-4">
        <div className="p-3 rounded-lg border border-neutral-200 bg-orange-100">
          <TemperatureIcon size={32} />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-sm">Feels like</span>
          <span className="text-black font-semibold text-lg">
            {weatherData.main.feels_like}°C
          </span>
        </div>
      </div>
    </div>
  );
}
