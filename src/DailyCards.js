import React from "react";
import forecast from "./forecast.json";
import { dateFormat, dateFormatHourly } from "./utils";
import { Carousel } from "react-materialize";
import sprite from './icons/sprite.svg'
dateFormatHourly();

//const iconName = forecast.daily.icon.toUpperCase().replace(/-/gi, "_");
const daily = forecast.daily.data;

// icon.toUpperCase().replace(/-/gi, "_");

function DailyCards() {
  return (
    <div className="container">
      <ul>
        {" "}
        <Carousel
          carouselId="Carousel-2"
          className="white-text center"
          options={{
            fullWidth: false,
            indicators: true,
            shift: 0,
            numVisible: 7,
            padding: 20,
            dist: 0,
          }}
        >
          {daily.map((item) => (
            <li key={item.time}>
              <div className="row ">
                <div className="col s2">
                  <div className="card">
                    <div className="card-image">
                    <svg className="card-image">
	<use xlinkHref={sprite+"#"+item.icon}></use>
</svg> 
                      
                      <span className="card-title black-text">
                        <p>{Math.round(item.temperatureHigh) + "℃"}</p>
                      </span>
                    </div>
                    <div className="card-content black-text">
                      <p>{item.summary}</p>
                    </div>
                    <div className="card-action black-text">
                      <h2>{dateFormat(item.time)}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </Carousel>
      </ul>
    </div>
  );
}

export default DailyCards;
