import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { dateFormat, dateFormatTime } from "../utils";
import { WeatherSunsetUp, WeatherSunsetDown } from 'mdi-material-ui'


function CurrentlyCard(props) {
  const { forecast } = props;
  const iconName = forecast.current.weather[0].icon;
  const currently = forecast.current;
  const date = dateFormat(currently.dt, props.lang);

  return (
    <Paper elevation={2} >
      <Grid container style={{ padding: '1rem' }} direction='column'  >
        <Grid item xs={12} >
          <Typography variant="button" component="p">
            Current Weather in : {props.place}
          </Typography>
          <Typography variant="button" component="p">
            {date}
          </Typography></Grid >
        <Grid item xs={12} >
          <Grid container spacing={2} >
            <Grid item xs={7} >
              <Grid container spacing={2} direction='column' alignItems='center'>

                <Grid item >
                  <WeatherSunsetUp fontSize='large' />
                  <Typography variant="button" component="p">
                    {dateFormatTime(currently.sunrise, props.lang)}
                  </Typography>
                </Grid >
                <Grid item >
                  <WeatherSunsetDown fontSize='large' />
                  <Typography variant="button" component="p">
                    {dateFormatTime(currently.sunset, props.lang)}
                  </Typography>
                </Grid >
                <Grid item >
                  <Typography variant="button" component="p">
                    {currently.weather[0].description}
                  </Typography>
                  <Typography variant="button" component="p">
                    {"WindSpeed -" + Math.round(currently.wind_speed) + "m/s"}
                  </Typography>
                  <Typography variant="button" component="p">
                    {"Feels like -" + Math.round(currently.feels_like)}&deg;C
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={5} >
              <Grid container direction='column' alignItems='center' >

                <Grid item xs={10}>
                  <img
                    src={"http://openweathermap.org/img/wn/" + iconName + "@2x.png"}
                    alt={iconName}
                  />
                </Grid>
                <Grid item xs={2} >
                  <Typography variant="button" component="p">
                    {Math.round(currently.temp)}&deg;C
               </Typography>
                </Grid>
              </Grid>
            </Grid >
          </Grid >
        </Grid >
      </Grid >
    </Paper >
  );
}

export default CurrentlyCard;
