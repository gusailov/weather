import React, { useState, useEffect } from "react";
import CurrentlyCard from "./CurrentlyCard";
import DailyCards from "./DailyCards";
//import SearchPlace from "./SearchPlace";
import Switchlang from "./Switchlang";
import Spinner from "./Spinner";
import { Context } from "./Context";
import { getForecast, getPlaceByCoords } from './api';
//import items from "../forecastOpen.json";
import Button from '@material-ui/core/Button';
import Asynchronous from "./Asynchronous";
import { usePosition } from 'use-position';

function App() {
  const [error, setError] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const {
    latitude,
    longitude,

  } = usePosition();
  const [coords, setCoords] = useState({});
  const [lang, setLang] = useState("en");


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


  useEffect(() => {
    if (coords.latitude && coords.longitude) {
      const forecast = getForecast(coords.latitude, coords.longitude, lang).then((res) => { setItems(res.data); setIsLoaded(true); }, (error) => {
        console.log("message", error);
        setIsLoaded(true);
        setError(error);
      }
      );
      console.log('getForecast', forecast)

    }

  }, [coords, lang])

  useEffect(() => {
    if (coords.latitude && coords.longitude) {
      const place = getPlaceByCoords(coords.latitude, coords.longitude, lang).then((res) => { console.log('getPlaceByCoords', res.data.results[0].formatted) }
      );
      console.log('PLACE', place)
      console.log('PLACEcoords', coords)
    }

  }, [coords, lang])



  const setLan = (l) => setLang(l);

  if (error) {
    return (
      <div className="container">
        <div className="row">
          <Asynchronous searchPosition={searchPosition}></Asynchronous>

        </div>
        Помилка: {items.message}
      </div>
    );
  } else if (!isLoaded || items.length === 0) {
    return <Spinner></Spinner>;
  } else {
    return (
      <Context.Provider value={{ setLan }}>
        <div className="container">
          <div className="container row mt-2">

            <Switchlang></Switchlang>
            <Asynchronous searchPosition={searchPosition}></Asynchronous>

          </div>
          <CurrentlyCard
            forecast={items}
            isLoaded={isLoaded}
            error={error}
            lang={lang}
          ></CurrentlyCard>
          <DailyCards
            forecast={items}
            isLoaded={isLoaded}
            error={error}
            lang={lang}
          ></DailyCards>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
