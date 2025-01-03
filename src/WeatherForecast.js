import React from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(props);
  }

  let apiKey = "aca2a4of530d0tf79751324ac6b3f501";
  let lon = props.longitude;
  let lat = props.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
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
