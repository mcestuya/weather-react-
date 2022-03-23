import Weather from "./Weather";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello Everyone! </h1>
        <Weather city="Tokyo" />
      </header>
    </div>
  );
}

export default App;