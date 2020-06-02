import React, { useState } from "react";
import CurrentlyCard from "./CurrentlyCard";
import DailyCards from "./DailyCards";
import HourlyCards from "./HourlyCards";
import forecast from "../forecast.json";
//import Api from "./Api";

function App() {
  //const forecast = Api().items;
  //const isLoaded = Api().isLoaded;

  console.log(forecast);
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
