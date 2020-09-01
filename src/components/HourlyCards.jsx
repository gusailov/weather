import React from "react";
import { dateFormatHourly } from "../utils";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";

function HourlyCards(props) {
  const { forecast } = props;
  const hourly = forecast.hourly;
  // console.log("index", props.active);

  const day = new Date(props.active * 1000);
  //console.log("day", day.getDate());
  const filter = hourly.filter(
    (item) => new Date(item.dt * 1000).getDate() === day.getDate()
  );
  //console.log("filter", filter);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="tab-content">
      <p className="card-title">Hourly Forecast</p>
      <Slider {...settings}>
        {filter.map((item) => (
          <div key={item.dt} className="col sm">
            <div className="tab-content">
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
                <p>{Math.round(item.temp) + "℃"}</p>
              </span>
              <div className="card-text mx-auto">
                <p>{item.summary}</p>
              </div>
              <div className="card-text mx-auto">
                <p>{dateFormatHourly(item.dt, props.lang)}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HourlyCards;
