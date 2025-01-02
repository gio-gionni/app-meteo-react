import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WetherForecast-icon">
            <img src={props.data.iconUrl} alt={props.data.description} />
          </div>
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">25°</span>
            <span className="WeatherForecast-temperature-min">13° </span>
          </div>
        </div>
      </div>
    </div>
  );
}