import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: Math.round(response.data.daily[0].temperature.day),
      wind: Math.round(response.data.daily[0].wind.speed),
      humidity: response.data.daily[0].temperature.humidity,
      iconUrl: ` https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
      description: response.data.daily[0].condition.description,
      date: new Date(response.data.daily[0].time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={new Date()} />
          </li>
          <li className="text-capitalized">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />

              <span className="temperature">{weatherData.temperature}</span>
              <span className="unit ">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "aca2a4of530d0tf79751324ac6b3f501";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
