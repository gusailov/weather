import React, { useState } from "react";
import { dateFormat } from "../utils";
import WeatherIcon from "react-open-weather-icons";
import HourlyCards from "./HourlyCards";

function DailyCards(props) {
  const { forecast } = props;
  const daily = forecast.daily;
  const [activeIndex, setActiveIndex] = useState(daily[0].dt);

  //console.log(<WeatherIcon name={"02d"} className="my-awesome-icon" />);

  return (
    <div className="container">
      <p className="card-title">Daily Forecast</p>
      <div className="nav nav-tabs row">
        {daily.map((item) => {
          const index = item.dt;
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className="nav-item col p-0 justify-content-center"
            >
              <>
                <div
                  className={`nav-link  ${isActive ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <>
                    {(
                      <WeatherIcon
                        name={item.weather[0].icon}
                        className="w-70"
                      />
                    ) || (
                      <img
                        className="w-70"
                        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        alt="альтернативный текст"
                      />
                    )}
                  </>
                  <div className="">
                    <p className="text-center">
                      {Math.round(item.temp.day) + "℃"}
                    </p>
                    <p className="text-center ">
                      {dateFormat(item.dt, props.lang)}
                    </p>
                  </div>
                </div>
              </>
            </div>
          );
        })}
      </div>
      <div className="">
        <HourlyCards
          forecast={props.forecast}
          isLoaded={props.isLoaded}
          error={props.error}
          lang={props.lang}
          active={activeIndex}
        ></HourlyCards>
      </div>
    </div>
  );
}

export default DailyCards;
