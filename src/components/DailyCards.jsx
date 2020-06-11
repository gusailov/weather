import React, { useState} from "react";
import { dateFormat } from "../utils";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";
import HourlyCards from "./HourlyCards";

function DailyCards(props) {
  const { forecast } = props;
  const daily = forecast.daily;
  const [activeIndex, setActiveIndex] = useState(0);
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
      <p className="card-title">Daily Forecast</p>
      <Slider {...settings}>
        {daily.map((item) => {
          const index = item.dt
           const isActive = index === activeIndex;
           return(
            <div 
              className="col sm">
            <div  className={`card card-block ${isActive ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              key={index} >
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
                <p>{Math.round(item.temp.day) + "℃"}</p>
              </span>
              <div className="card-text mx-auto">
                <p>{item.summary}</p>
              </div>
              <div className="card-text mx-auto">
                <p>{dateFormat(item.dt, props.lang)}</p>
              </div>
            </div>
          </div>)
        }
        )}
      </Slider>
      <HourlyCards
            forecast={props.forecast}
            isLoaded={props.isLoaded}
            error={props.error}
            lang={props.lang}
          ></HourlyCards>
    </div>
  );
}

export default DailyCards;
