import React from "react";

export default function WeatherForecastDay(props) {
  const day = new Date(props.data.time * 1000).toLocaleDateString("en-US", {
    weekday: "short",
  });
  return (
    <div>
      <div className="WeatherForecast-day">{day}</div>
      <div className="WetherForecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />
      </div>
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
