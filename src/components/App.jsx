import React, { useState, useEffect } from "react";
import CurrentlyCard from "./CurrentlyCard";
import DailyCards from "./DailyCards";
import HourlyCards from "./HourlyCards";
import SearchPlace from "./SearchPlace";
import Switchlang from "./Switchlang";
import Spinner from "./Spinner"
//import items from "../forecastOpen.json";

function App() {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [position, setPosition] = useState({});
  const [lang, setLang] = useState("en");
  
  const OPEN_WEATHER_MAP_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
    
  const getLang = (lang) => {
    setLang(lang);
  };

  const searchPosition = (pos) => {
    if (pos) {
      setPosition(pos);
    }
  };

  useEffect((pos) => {
    searchPosition(pos);
  }, []);

  const getForecast = async () => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.latitude}&lon=${position.longitude}&lang=${lang}&units=metric&exclude={part}&appid=${OPEN_WEATHER_MAP_API_KEY}`;
    
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
       getForecast();
      }, [lang, position]);

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
      <div className="container">
        <div className="row">
          <Switchlang getLang={getLang}></Switchlang>
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
