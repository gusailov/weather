import React, { useState, useEffect } from "react";
import CurrentlyCard from "./CurrentlyCard";
import DailyCards from "./DailyCards";
//import SearchPlace from "./SearchPlace";
import Switchlang from "./Switchlang";
import Spinner from "./Spinner";
import { Grid, Container, Divider } from "@material-ui/core";
import { Context } from "./Context";
import { getForecast, getPlaceByCoords } from './api';
import items from "../forecastOpen.json";
import Button from '@material-ui/core/Button';
import Asynchronous from "./Asynchronous";
import { usePosition } from 'use-position';
import HourlyCards from "./HourlyCards";
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const [error, setError] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(true);
  //const [items, setItems] = useState([]);
  const {
    latitude,
    longitude,

  } = usePosition();
  const [coords, setCoords] = useState({});
  const [lang, setLang] = useState("en");
  const [place, setPlace] = useState("place");
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      marginTop: 5
    },
  }));
  const classes = useStyles();

  console.log('COORDS', coords)

  useEffect(() => {
    if (latitude && longitude) {
      let pos = { latitude, longitude }
      setCoords(pos);
    }

  }, [latitude, longitude]);

  const searchPosition = (coords) => {
    console.log('searchPosition', coords)
    setCoords(coords);
  }


  // useEffect(() => {
  //   console.log('ForecastCOORDS', coords)
  //   if (coords.latitude && coords.longitude) {
  //     console.log('ForecastCOORDS', coords)
  //     getForecast(coords.latitude, coords.longitude, lang)
  //       .then((res) => { console.log('FORECAST', res.data); setItems(res.data); setIsLoaded(true) },
  //         (error) => {
  //           console.log("message", error);
  //           setIsLoaded(true);
  //           setError(error);
  //         }
  //       );
  //   }
  // }, [coords, lang])

  // useEffect(() => {
  //   console.log('getPlaceByCoords', coords)
  //   if (coords.latitude && coords.longitude) {
  //     getPlaceByCoords(coords.latitude, coords.longitude, lang).then((res) => { setPlace(res.data.results[0].formatted) }
  //     );
  //   }

  // }, [coords, lang])
  // <Asynchronous searchPosition={searchPosition}></Asynchronous>


  const setLan = (l) => setLang(l);

  if (error) {
    return (
      <div className="container">
        <div className="row">


        </div>
        Помилка: {items.message}
      </div>
    );
  } else if (!isLoaded || items.length === 0) {
    return <Spinner></Spinner>;
  } else {
    return (

      <Context.Provider value={{ setLan }}>
        <Container maxWidth="lg" disableGutters >

          <Grid container direction={'column'} className={classes.root} spacing={2}  >

            <Grid item xs={12} >
              <Grid container direction={'row'} wrap='wrap' justify='space-around'>
                <Grid item xs={3} sm={1} md={1}>
                  <Switchlang />
                </Grid>
                <Grid item xs={7} >
                  <Asynchronous />
                </Grid>
              </Grid>
            </Grid>
            <Divider variant="middle" />
            <Grid item xs={12} >
              <CurrentlyCard
                forecast={items}
                isLoaded={isLoaded}
                error={error}
                lang={lang}
                place={place}
              />
            </Grid>
            <Divider variant="middle" />
            <Grid item xs={12} >
              <DailyCards
                forecast={items}
                isLoaded={isLoaded}
                error={error}
                lang={lang}
              />
            </Grid>
            <Divider variant="middle" />
            <Grid item xs={12} >
              <HourlyCards forecast={items}
                isLoaded={isLoaded}
                error={error}
                lang={lang} />
            </Grid>

          </Grid></Container>
      </Context.Provider >

    );
  }
}

export default App;
