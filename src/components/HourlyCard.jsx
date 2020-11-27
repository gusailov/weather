import React from "react";
import WeatherIcon from "react-open-weather-icons";
import { dateFormatHourly } from "../utils";
import { Grid } from "@material-ui/core";
import OpacityIcon from '@material-ui/icons/Opacity';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'black',
    alignItems: 'center'

  },
}));

function HourlyCard(props) {
  const { forecast, lang } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid classes={{ root: classes.root }} container direction={'column'} spacing={2}>

      <Grid item >
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
        {Math.round(forecast.temp) + "℃"}

      </Grid>
      <Grid item  >
        {dateFormatHourly(forecast.dt, lang)}

      </Grid>
      <Grid item  >

        {t('WIND')} : {Math.round(forecast.wind_speed)}  {t('m/s')}
      </Grid>
      <Grid item  >
        <OpacityIcon />{+ (forecast.rain ? forecast.rain['1h'] : "0") + " mm"}
      </Grid>

    </Grid>
  );
}

export default HourlyCard;
