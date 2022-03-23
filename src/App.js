import React from "react";
import "./App.css";
import Search from "./Search";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Buddy</h1>
        <Search />
        <WeatherDisplay />
      </header>
    </div>
  );
}

export default App;
