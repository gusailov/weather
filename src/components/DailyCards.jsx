import React from "react";
import forecast from "../forecast.json";
import { dateFormat } from "../utils";
import sprite from "./icons/sprite.svg";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        class="bi bi-chevron-right"
        width="32"
        height="32"
        viewBox="0 0 20 20"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        class="bi bi-chevron-left"
        width="32"
        height="32"
        viewBox="0 0 20 20"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>
    </div>
  );
}

const daily = forecast.daily.data;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function DailyCards() {
  return (
    <div className="container">
      <Slider {...settings}>
        {daily.map((item) => (
          <div key={item.time} className="col sm">
            <div className="card card-block">
              <svg className="img-fluid">
                <use xlinkHref={sprite + "#" + item.icon}></use>
              </svg>
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
