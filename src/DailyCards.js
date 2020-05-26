import React, { useState, useEffect } from "react";
import forecast from "./forecast.json";
import Skycons from "react-skycons";
import dateFormat from "./serviceWorker";

//const iconName = forecast.daily.icon.toUpperCase().replace(/-/gi, "_");
const daily = forecast.daily;
console.log(dailys);

const date = dateFormat(daily.time);

function DailyCards() {
  return (
    <ul>
      {daily.map((item) => (
        <li key={item.name}>
          {item.name} {item.price}
        </li>
      ))}
    </ul>
  );
}

export default DailyCards;
