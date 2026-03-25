interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  sys?: {
    country: string;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

interface ForecastData {
  day: string;
  temp: number;
  icon?: string;
}

type Status = "idle" | "loading" | "success" | "error";

export type { WeatherData, ForecastData, Status };
