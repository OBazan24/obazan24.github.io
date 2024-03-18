import React from "react";
import "./weatherDisplay.css";

export default function WeatherDisplay({
  location,
  currentTemp,
  condition,
  image,
}) {
  const loaded = () => {
    return (
      <div className="weather-display">
        {/* <img src={image} alt="weather icon" className="weather-icon" /> */}
        <h1 className="temperature">{currentTemp} °F</h1>
        <p className="location">{location}</p>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return location && currentTemp ? loaded() : loading();
}
