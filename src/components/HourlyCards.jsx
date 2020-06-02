import React from "react";
import forecast from "../forecast.json";
import { dateFormatHourly } from "../utils";
import sprite from "./icons/sprite.svg";
import Slider from "react-slick";
import {SampleNextArrow,SamplePrevArrow} from "./Arrows"

const hourly = forecast.hourly.data;
console.log(hourly);


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function HourlyCards() {
  return (
    <div className="container">
      <Slider {...settings}>
        {hourly.map((item) => (
          <div key={item.time} className="col sm">
            <div className="card card-block">
              <svg className="img-fluid">
                <use xlinkHref={sprite + "#" + item.icon}></use>
              </svg>
              <span className="card-text">
                <p>{Math.round(item.temperature) + "℃"}</p>
              </span>
              <div className="card-text mx-auto">
                <p>{item.summary}</p>
                 </div>
              <div className="card-text mx-auto">
                <p>{dateFormatHourly(item.time)}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HourlyCards;
