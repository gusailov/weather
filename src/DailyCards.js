import React, { useState, useEffect } from "react";
import forecast from "./forecast.json";
import Skycons from "react-skycons";
import { dateFormat, dateFormatHourly } from "./utils";
import { Carousel } from "react-materialize";
dateFormatHourly();

//const iconName = forecast.daily.icon.toUpperCase().replace(/-/gi, "_");
const daily = forecast.daily.data;

// icon.toUpperCase().replace(/-/gi, "_");

function DailyCards() {
  return (
    <div>
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
                <div className="col">
                  <div className="card">
                    <div className="card-image">
                      <Skycons
                        className="responsive-img"
                        color="black"
                        icon={item.icon.toUpperCase().replace(/-/gi, "_")}
                        autoplay={true}
                      />
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
