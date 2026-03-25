import "./App.css";
import { WeatherDashboard } from "./components/WeatherDashboard";

function App() {
  return (
    <div className="max-w-5xl  min-h-screen justify-center flex flex-col items-center mx-auto">
      <WeatherDashboard />
    </div>
  );
}

export default App;
