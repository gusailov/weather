import React, { useState, useEffect } from "react";
import CurrentlyCard from "./CurrentlyCard";
import DailyCards from "./DailyCards";
import SearchPlace from "./SearchPlace";
import Switchlang from "./Switchlang";
import Spinner from "./Spinner";
import { Context } from "./Context";
import { getForecast } from './api';
import GetCoords from './GetCoords';

function App() {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [position, setPosition] = useState({});
  const [lang, setLang] = useState("en");

  const lat = GetCoords().position.latitude;
  const lon = GetCoords().position.longitude;
  console.log('COORDS', lat, lon)



  const searchPosition = (pos) => {
    if (pos) {
      setPosition(pos);
    }
  };


  useEffect(() => {
    const forecast = getForecast(lat, lon, lang).then((res) => setItems(res.data));
    console.log('getForecast', forecast)
  }, [lat, lon, lang])

  console.log('items', items)




  const setLan = (l) => setLang(l);

  if (items.message) {
    return (
      <div className="container">
        <div className="row">
          <SearchPlace
            searchPosition={searchPosition}
            position={position}
          ></SearchPlace>
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
            <SearchPlace
              searchPosition={searchPosition}
              position={position}
            ></SearchPlace>
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
