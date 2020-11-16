import React, { useState, useEffect } from "react";
import CurrentlyCard from "./CurrentlyCard";
import DailyCards from "./DailyCards";
//import SearchPlace from "./SearchPlace";
import Switchlang from "./Switchlang";
import Spinner from "./Spinner";
import { Context } from "./Context";
import { getForecast, getPlaceByCoords } from './api';
import items from "../forecastOpen.json";
import Button from '@material-ui/core/Button';
import Asynchronous from "./Asynchronous";
import { usePosition } from 'use-position';

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
        <div className="container">
          <div className="container row mt-2">

            <Switchlang></Switchlang>


          </div>
          <CurrentlyCard
            forecast={items}
            isLoaded={isLoaded}
            error={error}
            lang={lang}
            place={place}
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
