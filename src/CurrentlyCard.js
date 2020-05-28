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
      
      
        <div className="col s12 m6">
          <div className="card">
            <span className="card-title blue-text text-darken-2">{date}</span>
            <div className="card-image">
            <svg className="card-image">
	<use xlinkHref={sprite+"#"+currentlyIconName}></use>
</svg>     
              <span className="card-title blue-text text-darken-2">
                {currently.summary}
              </span>
              <div className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i>
              </div>
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default CurrentlyCard;
