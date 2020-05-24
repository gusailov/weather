import React, { useState, useEffect } from "react";
import forecast from "./forecast.json";
import Skycons from "react-skycons";

const iconName = forecast.currently.icon.toUpperCase().replace(/-/gi, "_");
const currently = forecast.currently;
console.log(currently.summary);

function CurrentlyCard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <Skycons color="black" icon={iconName} autoplay={true} />
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
    </div>
  );
}

export default CurrentlyCard;
