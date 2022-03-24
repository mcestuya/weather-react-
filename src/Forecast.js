import React from "react";
import Forecast from "./Forecast";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="container">
      <div class="weather-forecast" id="forecast">
        <div class="row">
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </div>
      </div>
    </div>
  );
}
