import React, { useState, useEffect } from "react";
import forecast from "./forecast.json";
import Skycons from "react-skycons";

const iconName = forecast.currently.icon.toUpperCase().replace(/-/gi, "_");
const currently = forecast.currently;
console.log(currently.summary);

function CurrentlyCard() {
  return (
    <div className="container">
      <div className="card-deck">
        {
          <div className="card">
            <div
              style={{
                width: "18rem",
              }}
              className="card-img-top"
            >
              <Skycons color="black" icon={iconName} autoplay={true} />
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
