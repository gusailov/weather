import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import DailyCard from './DailyCard';
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
}));
const settings = {
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 8,
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
export default function DailyCards(props) {
  const { forecast, lang } = props;
  const daily = forecast.daily;
  const classes = useStyles();

  const { t } = useTranslation();
  return (

    <div className={classes.root}>
      <Paper elevation={2} style={{ padding: '1rem' }}>
        <Typography gutterBottom={true} variant="button" component="p">
          {t('Daily Forecast')}
        </Typography>

        <Slider {...settings}>
          {daily.map((item) =>

            < DailyCard lang={lang} value={item.dt} forecast={item} key={item.dt} />


          )}
        </Slider>

      </Paper>
    </div >
  );
}
