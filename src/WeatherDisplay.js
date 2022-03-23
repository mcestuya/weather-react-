import React from "react";

import "./WeatherDisplay.css";

export default function WeatherDisplay() {
  return (
    <div className="WeatherDisplay">
      <div class="row">
        <div class="col-4">
          <div class="clearfix image">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="clear"
              id="icon"
              class="float-left"
            />

            <span class="temperature" id="temp"></span>
            <span class="temperature-units">23°C</span>
          </div>
        </div>
        <div class="col-4 weather-properties">
          <ul>
            <li>
              Humidity:<span id="humidity"></span>23%
            </li>
            <li>
              Wind: <span id="wind"></span>13km/hr
            </li>
          </ul>
        </div>

        <div class="col-4 location-name">
          <h1 id="city">Nairobi</h1>
          <ul>
            <li>
              Updated:<span id="date">Friday 09:04</span>
            </li>
            <li id="skydescription">Clear Sky</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
