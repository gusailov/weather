import React from "react";
import { dateFormat } from "../utils";

function CurrentlyCard(props) {
  const { forecast } = props;
  const iconName = forecast.current.weather[0].icon;
  const currently = forecast.current;
  const date = dateFormat(currently.dt, props.lang);
  //console.log(" forecast", forecast);

  return (
    <div className="container mb-5 mt-5">
      <div className="card">
        <div className="card-body">
          <p>Current Weather in {forecast.lat}</p>
          <div className="">
            <div>
              {date} {Math.round(currently.temp)}
              <span>&deg;C</span>
            </div>
            <span
              className="glyphicon glyphicon-search"
              aria-hidden="true"
            ></span>
          </div>
          <div className="row">
            <img
              src={"http://openweathermap.org/img/wn/" + iconName + "@2x.png"}
              alt="альтернативный текст"
            />
          </div>
          <div className="card-title blue-text text-darken-2 center-align col">
            {currently.weather[0].description}
          </div>
          <div className="card-content col s12">
            <div className="">
              {"WindSpeed -" + Math.round(currently.wind_speed) + "m/s"}
            </div>
            <div className="col s2">
              {"Feels like -" + Math.round(currently.feels_like)}
              <span>&deg;C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentlyCard;
