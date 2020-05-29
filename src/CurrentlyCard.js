import React from "react";
import forecast from "./forecast.json";
import { dateFormat } from "./utils";
import sprite from './icons/sprite.svg'

const currentlyIconName = forecast.currently.icon;
const currently = forecast.currently;
const date = dateFormat(currently.time);

function CurrentlyCard() {
      return (
        <div className="container">
            <div className="card row">
              <div className="col s12">
            <div className="card-title blue-text flow-text row center-align">
              <div>
              {date} {Math.round(currently.temperature) }<span>&deg;C</span>
              </div>
              </div>
            
            <div className="row">
            <svg className="card-image">	<use xlinkHref={sprite+"#"+currentlyIconName}></use></svg>     </div>
              <div className="card-title blue-text text-darken-2 center-align col">
                {currently.summary}
              </div>
                          </div>
             
            <div className="card-content col s12">
              <div className="col s2">
                {'WindSpeed -'+ Math.round(currently.windSpeed) + 'm/s'}
              </div>
              <div className="col s2">
                {'Feels like -'+ Math.round(currently.apparentTemperature)}<span>&deg;C</span>
              </div>
              <div className="card-title activator grey-text text-darken-4 col s2"><i className="material-icons right">more_vert</i></div>
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
