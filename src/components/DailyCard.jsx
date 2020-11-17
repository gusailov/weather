import React, { useState } from "react";
import { dateFormat } from "../utils";
import WeatherIcon from "react-open-weather-icons";
import HourlyCards from "./HourlyCards";
import { Grid, Tab, Tabs } from "@material-ui/core";


function DailyCard(props) {
  const { forecast } = props;
  const daily = forecast.daily;
  const day = new Date(props.index * 1000);
  const filter = daily.filter(
    (item) => new Date(item.dt * 1000).getDate() === day.getDate()
  );

  return (
    <div className="container">


      <Grid container spacing={2}>


        <Grid item xs={3}>
          {(<img
            className="w-70"
            src={`http://openweathermap.org/img/wn/${filter[0].weather[0].icon}@2x.png`}
            alt="альтернативный текст"
          />
          ) || (
              <WeatherIcon
                name={filter[0].weather[0].icon}
                className="w-70"
              />)}
        </Grid>



      </Grid>


    </div>
  );
}

export default DailyCard;
