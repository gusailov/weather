import React, { useState,useEffect } from "react";
import CurrentlyCard from "./CurrentlyCard";
import DailyCards from "./DailyCards";
import HourlyCards from "./HourlyCards";
//import forecast from "../forecastOpen.json";
import Api from "./Api";

function App() {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  const searchName = async () => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=46.657685&lon=31.015853&units=metric&exclude={part}&appid=`;
    await fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
                },
        (message) => {
          setIsLoaded(true);
          setError(message);
        }
      );
  };
  useEffect(() => {    
    searchName()
  }, []);
  
  console.log("items- ", items);
  console.log("isLoaded-" ,isLoaded);
  console.log("error-" , error);
  
  if (error) {
    return <div>Помилка: {error}</div>;
  } else if (!isLoaded || items.length === 0) {
    return <div>Завантаження...</div>;
  } else {
  return (
        <div>
            <CurrentlyCard forecast={items}
        isLoaded={isLoaded}
        error={error}></CurrentlyCard>
        <DailyCards forecast={items}
        isLoaded={isLoaded}
        error={error}></DailyCards>
        <HourlyCards forecast={items}
        isLoaded={isLoaded}
        error={error}></HourlyCards>
          </div>
  );
}}

export default App;
