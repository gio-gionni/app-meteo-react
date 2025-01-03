import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <Weather defaultCity="Lisbon" />
        <footer>
          This project is created by{" "}
          <a
            href="https://github.com/gio-gionni"
            target="_blank"
            rel="noreferrer"
          >
            Giulia
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/gio-gionni/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
