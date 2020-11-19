import React from "react";
import { dateFormat } from "../utils";
import WeatherIcon from "react-open-weather-icons";
import { Grid, Paper } from "@material-ui/core";


function DailyCard(props) {
  const { forecast, lang } = props;

  return (

    <Grid container direction={'column'} spacing={2}>
      <Paper elevation={1} >
        <Grid item  >
          {(<img
            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
            alt={forecast.weather[0].icon}
          />
          ) || (
              <WeatherIcon
                name={forecast.weather[0].icon}
                className="w-70"
              />)}
        </Grid>

        <Grid item  >
          <p>{Math.round(forecast.temp.day) + "℃"}</p>

          {dateFormat(forecast.dt, lang)}
        </Grid>
        <Grid item  >
          Morning - {Math.round(forecast.temp.morn) + "℃"}
        </Grid>
        <Grid item  >
          Evening - {Math.round(forecast.temp.eve) + "℃"}
        </Grid>
      </Paper>
    </Grid>

  );
}

export default DailyCard;
