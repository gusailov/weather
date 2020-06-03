import React from "react";
import { dateFormatHourly } from "../utils";

import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";

function HourlyCards(props) {
  const { forecast } = props;
  const hourly = forecast.hourly;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {hourly.map((item) => (
          <div key={item.time} className="col sm">
            <div className="card card-block">
              <img
                className="card-img-top"
                src={
                  "http://openweathermap.org/img/wn/" +
                  item.weather[0].icon +
                  "@2x.png"
                }
                alt="альтернативный текст"
              />
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
