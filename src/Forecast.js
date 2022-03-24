import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div class="col-sm-2">
      <div class="weatherforecast-day">Mon</div>
      <div class="weatherforecast-image">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="sunny"
        />
      </div>
      <br />
      <div class="weatherforecast-temperature">
        <span class="weatherforecast-temperature-max">22°</span>
        <span class="weatherforecast-temperature-min"> 18°</span>
      </div>
    </div>
  );
}
