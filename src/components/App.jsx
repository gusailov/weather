import React, { useState, useEffect } from "react";
import CurrentlyCard from "./CurrentlyCard";
import DailyCards from "./DailyCards";
import Switchlang from "./Switchlang";
import Spinner from './Spinner'
import { Grid, Container, Divider } from "@material-ui/core";
import { Context } from "./Context";
import { getForecast, getPlaceByCoords, getPlaceById } from './api';
import Asynchronous from "./Asynchronous";
import { usePosition } from 'use-position';
import HourlyCards from "./HourlyCards";
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
//import items from "../forecastOpen.json";

function App() {
  const [error, setError] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([]);
  const {
    latitude,
    longitude,

  } = usePosition();
  const [coords, setCoords] = useState({ latitude: 37.408794, longitude: - 122.020909 });
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
  const { i18n } = useTranslation();

  console.log('COORDS', coords)

  useEffect(() => {
    if (!latitude || !longitude) {
      return
    } else {
      let pos = { latitude, longitude }
      setCoords(pos);
    }

  }, [latitude, longitude]);

  const searchPosition = (result, lang) => {
    getPlaceById(result.locationId, lang).then((res) => {
      const [place] = [...res.data.response.view];
      const [result] = [...place.result];
      setCoords(result.location.displayPosition);

    }
    )

  }


  useEffect(() => {
    if (coords.latitude && coords.longitude) {

      getForecast(coords.latitude, coords.longitude, lang)
        .then((res) => { setItems(res.data); setIsLoaded(true) },
          (error) => {
            console.log("message", error);
            setIsLoaded(true);
            setError(error);
          }
        );
      getPlaceByCoords(coords.latitude, coords.longitude, lang).then((res) => {
        const [place] = [...res.data.items];
        setPlace(place.address.label)
      }
      );
    }

    i18n.changeLanguage(lang)
  }, [coords, lang, i18n, place])




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
    return <Spinner />;

  } else {
    return (
      <Context.Provider value={{ setLan }}>
        <Container maxWidth="lg"  >
          <Grid container direction={'column'} className={classes.root} spacing={2}  >
            <Grid item xs={12} >
              <Grid container direction={'row'} wrap='wrap' justify='space-between'>
                <Grid item xs={3} sm={1} >
                  <Switchlang />
                </Grid>
                <Grid item xs={7} >
                  <Asynchronous searchPosition={searchPosition} lang={lang} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} ><Divider variant='fullWidth' /></Grid>
            <Grid item xs={12} >
              <CurrentlyCard
                forecast={items}
                isLoaded={isLoaded}
                error={error}
                lang={lang}
                place={place}
              />
            </Grid>
            <Grid item xs={12} ><Divider variant='fullWidth' /></Grid>
            <Grid item xs={12} >
              <DailyCards
                forecast={items}
                isLoaded={isLoaded}
                error={error}
                lang={lang}
              />
            </Grid>
            <Grid item xs={12} ><Divider variant='fullWidth' /></Grid>
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
