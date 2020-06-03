import React, { useState } from "react";
import CurrentlyCard from "./CurrentlyCard";
import DailyCards from "./DailyCards";
import HourlyCards from "./HourlyCards";
import forecast from "../forecastOpen.json";
import Api from "./Api";

function App() {
  const forecast2 = Api().items;
  //const isLoaded = Api().isLoaded;

  console.log(forecast.daily);
  if (!forecast || forecast.length === 0) {
    return <div>Loading...</div>;
  }
  //console.log(forecast);
  return (
    <div>
      <CurrentlyCard forecast={forecast}></CurrentlyCard>
      <DailyCards forecast={forecast}></DailyCards>
      <HourlyCards forecast={forecast}></HourlyCards>
    </div>
  );
}

export default App;
