import React from "react";
import { dateFormat } from "../utils";

import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";

function DailyCards(props) {
  const { forecast } = props;
  const daily = forecast.daily;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container mb-5 mt-5">
      <Slider {...settings}>
        {daily.map((item) => (
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
                <p>{Math.round(item.temperatureHigh) + "℃"}</p>
              </span>
              <div className="card-text mx-auto">
                <p>{item.summary}</p>
              </div>
              <div className="card-text mx-auto">
                <p>{dateFormat(item.time)}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DailyCards;
