import React from "react";
import CurrentLocation from "./CurrentLocation";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <CurrentLocation />
      <div class="row mt-10">
        <div class="col-sm-9">
          <input
            type="search"
            id="city-input"
            class="form-control"
            placeholder="Enter the city's name"
            autocomplete="off"
          />
        </div>
        <div class="col-sm-3">
          <input
            type="submit"
            value="Search"
            class="btn btn-primary form-control"
          />
        </div>
      </div>
    </div>
  );
}
