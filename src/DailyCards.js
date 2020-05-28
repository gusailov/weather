import React from "react";
import forecast from "./forecast.json";
import { dateFormat, dateFormatHourly } from "./utils";
import { Carousel } from "react-materialize";
import sprite from "./icons/sprite.svg";
dateFormatHourly();

//const iconName = forecast.daily.icon.toUpperCase().replace(/-/gi, "_");
const daily = forecast.daily.data;

// icon.toUpperCase().replace(/-/gi, "_");

function DailyCards() {
  return (
    <ul className="container row">
      <Carousel
        carouselId="Carousel-2"
        className="carousel"
        options={{
          fullWidth: false,
          indicators: false,
          shift: 0,
          numVisible: 0,
          padding: 20,
          dist: 0,
        }}
      >
        {daily.map((item) => (
          <li className="" key={item.time}>
            <div className="">
              <div className="">
                <svg className="">
                  <use xlinkHref={sprite + "#" + item.icon}></use>
                </svg>
                <span className="black-text">
                  <p>{Math.round(item.temperatureHigh) + "℃"}</p>
                </span>
              </div>
              <div className="black-text">
                <p>{item.summary}</p>
              </div>
              <div className="black-text">
                <p>{dateFormat(item.time)}</p>
              </div>
            </div>
          </li>
        ))}
      </Carousel>
    </ul>
  );
}

export default DailyCards;
