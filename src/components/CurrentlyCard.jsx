import React, { useEffect } from "react";
import { dateFormat } from "../utils";
import Geocode from "react-geocode"
function CurrentlyCard(props) {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API);
  const { forecast } = props;
  const iconName = forecast.current.weather[0].icon;
  const currently = forecast.current;
  const date = dateFormat(currently.dt, props.lang);
  console.log(" props.lang", props.lang);
  
  Geocode.setLanguage(`${props.lang}`);
  useEffect(() => {
    Geocode.fromLatLng(forecast.lat, forecast.lon).then(
      response => {
        const address = response.results[0].address_components[1].long_name;
        console.log(address);
      },
      error => {
        console.error(error);
      }
    );
  }, [props.lang]);

  
  return (
    <div className="container mb-5 mt-5">
      <div className="card">
        <div className="">
  <p>Weather in {forecast.lat}</p>
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
        </div>

        <div className="card-content col s12">
          <div className="">
            {"WindSpeed -" + Math.round(currently.wind_speed) + "m/s"}
          </div>
          <div className="col s2">
            {"Feels like -" + Math.round(currently.feels_like)}
            <span>&deg;C</span>
          </div>
          <div className="">
            <i className="material-icons right">more_vert</i>
          </div>
          <div className="col s2">
            <div className="btn-floating waves-effect waves-light red">
              <i className="material-icons">add</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentlyCard;
