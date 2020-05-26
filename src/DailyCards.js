import React, { useState, useEffect } from "react";
import forecast from "./forecast.json";
import Skycons from "react-skycons";
import dateFormat from "./serviceWorker";
import { Carousel } from "react-materialize";

//const iconName = forecast.daily.icon.toUpperCase().replace(/-/gi, "_");
const daily = forecast.daily.data;
console.log(daily);

const date = dateFormat(daily.time);

function DailyCards() {
  return (
    <div>
      <ul>
        {" "}
        <Carousel
          carouselId="Carousel-2"
          className="white-text center"
          options={{
            fullWidth: true,
            indicators: true,
          }}
        >
          {daily.map((item) => (
            <li key={item.time}>
              <div className="red">
                <h2>{dateFormat(item.time)}</h2>
                <p>{item.summary}</p>
              </div>
            </li>
          ))}
        </Carousel>
      </ul>
    </div>
  );
}

export default DailyCards;
