import React from "react";
import WeatherIcon from "react-open-weather-icons";
import { dateFormatHourly } from "../utils";
import { Grid, Paper } from "@material-ui/core";
import OpacityIcon from '@material-ui/icons/Opacity';


function HourlyCard(props) {
  const { forecast, lang } = props;

  return (

    <Grid container direction={'column'} spacing={2}>
      <Paper elevation={1} >
        <Grid >
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
          {Math.round(forecast.temp) + "℃"}

        </Grid>
        <Grid item  >
          {dateFormatHourly(forecast.dt, lang)}

        </Grid>
        <Grid item  >
          {"WindSpeed -" + Math.round(forecast.wind_speed) + "m/s"}
        </Grid>
        <Grid item  >
          <OpacityIcon />{+ (forecast.rain ? forecast.rain['1h'] : "0") + " mm"}
        </Grid>
      </Paper>
    </Grid>
  );
}

export default HourlyCard;
