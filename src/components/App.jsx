import React, { useState, useEffect } from "react";
//import GetCoords from "./GetCoords";
import CurrentlyCard from "./CurrentlyCard";
import DailyCards from "./DailyCards";
import HourlyCards from "./HourlyCards";
import SearchPlace from "./SearchPlace";
//import SearchGoo from "./Search";
import Switchlang from "./Switchlang";
//import items from "../forecastOpen.json";

function App() {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [position, setPosition] = useState({});
  const [lang, setLang] = useState("en");
  //const latitude = GetCoords().position.latitude;
  // const longitude = GetCoords().position.longitude;
  const getLang = (lang) => {
    setLang(lang);
  };

  const searchPosition = (pos) => {
    if (pos) {
      console.log("APp searchPosition -", pos);
      setPosition(pos);
    }
  };

  useEffect((pos) => {
    searchPosition(pos);
  }, []);

  const getForecast = async () => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.latitude}&lon=${position.longitude}&lang=${lang}&units=metric&exclude={part}&appid=`;
    //ce8dda5c75f25be3409d7b0e73436bf9
    await fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          console.log("message", error);
          setIsLoaded(true);
          setError(error);
        }
      );
  };
  useEffect(() => {
    const isEmpty = (position) => Object.keys(position).length === 0;
    console.log("isEmpty", Object.keys(position).length);
    console.log("positiong etForecast -", position);
    if (isEmpty) {
      getForecast();
    }
  }, [lang, position]);

  if (items.message) {
    return (
      <div className="container">
        <div className="row">
          <Switchlang getLang={getLang}></Switchlang>
          <SearchPlace
            searchPosition={searchPosition}
            position={position}
          ></SearchPlace>
        </div>
        Помилка: {items.message}
      </div>
    );
  } else if (!isLoaded || items.length === 0) {
    return <div>Завантаження...</div>;
  } else {
    return (
      <div className="container">
        <div className="row">
          <Switchlang getLang={getLang}></Switchlang>
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
        <HourlyCards
          forecast={items}
          isLoaded={isLoaded}
          error={error}
          lang={lang}
        ></HourlyCards>
      </div>
    );
  }
}

export default App;
