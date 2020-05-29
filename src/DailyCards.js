import React from "react";
import forecast from "./forecast.json";
import { dateFormat, dateFormatHourly } from "./utils";
//import { Carousel } from "react-materialize";
import { Carousel } from "react-bootstrap";
import sprite from "./icons/sprite.svg";

dateFormatHourly();

//const iconName = forecast.daily.icon.toUpperCase().replace(/-/gi, "_");
const daily = forecast.daily.data;

// icon.toUpperCase().replace(/-/gi, "_");

function DailyCards() {
  return (
    <div className="container ">
      <Carousel
        className="container card"
        indicators={false}
        wrap={true}
        interval={null}
      >
        {daily.map((item) => (
          <Carousel.Item key={item.time} className="">
            <div className="col-sm">
              <div className="card-body mx-auto">
                <svg className="d-block w-100">
                  <use xlinkHref={sprite + "#" + item.icon}></use>
                </svg>
                <span className="card-text">
                  <p>{Math.round(item.temperatureHigh) + "℃"}</p>
                </span>
              </div>
              <div className="card-text mx-auto">
                <p>{item.summary}</p>
              </div>
              <div className="card-text mx-auto">
                <p>{dateFormat(item.time)}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default DailyCards;
