import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import HourlyCard from './HourlyCard';
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  indicator: {
    opacity: 0,
  },
  disabled: {
    color: 'red',
  },
}));
const settings = {
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,


      }
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};
function HourlyCards(props) {
  const { forecast, lang } = props;
  const hourly = forecast.hourly;
  const classes = useStyles();

  const { t } = useTranslation();




  return (

    <div className={classes.root}>
      <Paper elevation={2} style={{ padding: '1rem' }}>
        <Typography variant="button" component="p">
          {t('Hourly Forecast')}

        </Typography>


        <Slider {...settings}>
          {hourly.map((item) =>
            < HourlyCard lang={lang} forecast={item} index={item.dt} />)}
        </Slider>

      </Paper>
    </div >

  );
}

export default HourlyCards;
