import React, { useState } from "react";
import { dateFormat } from "../utils";
import WeatherIcon from "react-open-weather-icons";
import HourlyCards from "./HourlyCards";
import { Grid, Tab, Tabs } from "@material-ui/core";


function DailyCards(props) {
  const { forecast } = props;
  const daily = forecast.daily;
  const [activeIndex, setActiveIndex] = useState(daily[0].dt);
  const [value, setValue] = React.useState(0);
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <p className="card-title">Daily Forecast</p>
      <div className="nav nav-tabs row">

        <Grid container spacing={2}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="secondary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            {daily.map((item) => {
              const index = item.dt;
              const isActive = index === activeIndex;
              return (
                <Grid item xs={3}>
                  <div
                    key={index}
                    className="nav-item col p-0 justify-content-center"
                  >
                    <>
                      <Tab fullWidth label={
                        <div className="">
                          <p >
                            {Math.round(item.temp.day) + "℃"}
                          </p>
                          <p>{dateFormat(item.dt, props.lang)}</p>
                        </div>
                      }

                        icon={(
                          <img
                            className="w-70"
                            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            alt="альтернативный текст"
                          />
                        ) || (
                            <WeatherIcon
                              name={item.weather[0].icon}
                              className="w-70"
                            />
                          )}
                        onClick={() => setActiveIndex(index)} />
                    </>
                  </div>
                </Grid>
              );
            })}
          </Tabs>
        </Grid>
      </div>
      <div className="">

        <HourlyCards
          forecast={props.forecast}
          isLoaded={props.isLoaded}
          error={props.error}
          lang={props.lang}
          active={activeIndex}
          value={value}
        ></HourlyCards>

      </div>
    </div>
  );
}

export default DailyCards;
