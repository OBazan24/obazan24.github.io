import React, { useState } from "react";
import WeatherDisplay from "./components/weatherDisplay/WeatherDisplay";
import Form from "./components/form/Form";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async (cityName, apiKey) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      setWeatherData(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleWeatherSearch = (cityName) => {
    const apiKey = "bc216cfd2e32d89a5bedc2e1efac66bb";
    fetchData(cityName, apiKey);
  };

  return (
    <div className="app">
      <Form onWeatherSearch={handleWeatherSearch} />
      <br />
      {weatherData && (
        <WeatherDisplay
          location={weatherData.name}
          currentTemp={weatherData.main.temp}
          condition={weatherData.weather[0].description}
        />
      )}
    </div>
  );
}
