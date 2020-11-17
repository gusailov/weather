import React from "react";
import { dateFormatHourly } from "../utils";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";
import { Grid, Card, GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function HourlyCards(props) {

  const { forecast, lang } = props;
  const hourly = forecast.hourly;
  const day = new Date(props.index * 1000);
  const filter = hourly.filter(
    (item) => new Date(item.dt * 1000).getDate() === day.getDate()
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));
  const classes = useStyles();
  return (

    <Grid container spacing={2} role="tabpanel"
      hidden={props.value !== props.index}>

      <div className={classes.root}>
        <Typography>Hourly Forecast</Typography>
        <GridList className={classes.gridList} cols={2.5}>

          {filter.map((item) => (
            <GridListTile key={item.dt} item="true" xs={4}>
              <div className="col sm">
                <div className="tab-content">
                  <img
                    className="card-img-top"
                    src={
                      "http://openweathermap.org/img/wn/" +
                      item.weather[0].icon +
                      "@2x.png"
                    }
                    alt="альтернативный текст"
                  />
                  <span className="card-text">
                    <p>{Math.round(item.temp) + "℃"}</p>
                  </span>
                  <div className="card-text mx-auto">
                    <p>{item.summary}</p>
                  </div>
                  <div className="card-text mx-auto">
                    <p>{dateFormatHourly(item.dt, lang)}</p>
                  </div>
                </div>
              </div>
            </GridListTile>))}

        </GridList >
      </div>
    </Grid>
  );
}

export default HourlyCards;
