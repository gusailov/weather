import React from "react";
import forecast from "../forecast.json";
import { dateFormat } from "../utils";
import sprite from "./icons/sprite.svg";

const currentlyIconName = forecast.currently.icon;
const currently = forecast.currently;
const date = dateFormat(currently.time);

function CurrentlyCard() {
  return (
    <div className="container mb-5 mt-5">
      <div className="card">
        <div className="">
          <div className="">
            <div>
              {date} {Math.round(currently.temperature)}
              <span>&deg;C</span>
            </div>
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </div>

          <div className="row">
            <svg className="card-image">
              {" "}
              <use xlinkHref={sprite + "#" + currentlyIconName}></use>
            </svg>{" "}
          </div>
          <div className="card-title blue-text text-darken-2 center-align col">
            {currently.summary}
          </div>
        </div>

        <div className="card-content col s12">
          <div className="">
            {"WindSpeed -" + Math.round(currently.windSpeed) + "m/s"}
          </div>
          <div className="col s2">
            {"Feels like -" + Math.round(currently.apparentTemperature)}
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
