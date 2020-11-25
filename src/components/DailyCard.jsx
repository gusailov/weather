import React from "react";
import { dateFormat } from "../utils";
import WeatherIcon from "react-open-weather-icons";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'black',
  },
}));
function DailyCard(props) {
  const { forecast, lang } = props;
  const classes = useStyles();
  return (

    <Grid classes={{ root: classes.root }} container direction={'column'} spacing={2}>

      <Grid item  >
        {(<img
          src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
          alt={forecast.weather[0].icon}
        />
        ) || (
            <WeatherIcon
              name={forecast.weather[0].icon}
            />)}
      </Grid>
      <Grid item  >
        {forecast.weather[0].description}
      </Grid>
      <Grid item  >
        <p>{Math.round(forecast.temp.day) + "℃"}</p>
        {dateFormat(forecast.dt, lang)}
      </Grid>
      <Grid item  >
        Morning : {Math.round(forecast.temp.morn) + "℃"}
      </Grid>
      <Grid item  >
        Evening : {Math.round(forecast.temp.eve) + "℃"}
      </Grid>

    </Grid>

  );
}

export default DailyCard;
