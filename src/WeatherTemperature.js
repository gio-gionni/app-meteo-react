import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahr(event) {
    event.preventDefault();
    setUnit("fahr");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === `celsius`) {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.celsius}</span>
        <span className="unit ">
          °C|
          <a href="/" onClick={showFahr}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahr = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="WeatherTemperature ">
        <span className="temperature">{fahr}</span>
        <span className="unit ">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          |°F
        </span>
      </div>
    );
  }
}
