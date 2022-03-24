import React from "react";
import "./App.css";
import Search from "./Search";
import WeatherDisplay from "./WeatherDisplay";
import WeatherForecast from "./WeatherForecast";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <h1>Weather Buddy</h1>
            <Search />
            <WeatherDisplay />
            <WeatherForecast />
          </div>
        </div>
      </div>
    </div>
  );
}
