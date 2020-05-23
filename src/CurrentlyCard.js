import React, { useState, useEffect } from "react";
import forecast from "./forecast.json";
import Skycons from "react-skycons";

function myFunction() {
  const regex = /-/gi;
  var str = "partly-cloudy-night";
  var res = str.toUpperCase().replace(regex, "_");
  return res;
}

console.log(myFunction());

console.log(forecast.currently.summary);
const currently = forecast.currently;
function CurrentlyCard() {
  return (
    <div>
      <div className="card-deck">
        {
          <div className="card">
            <div className="card-img-top">
              <Skycons color="black" icon="PARTLY_CLOUDY_DAY" autoplay={true} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{currently.summary}</h5>
              <p className="card-text"></p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default CurrentlyCard;
