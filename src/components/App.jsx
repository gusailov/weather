import React, { useState } from "react";
import CurrentlyCard from "./CurrentlyCard";
import DailyCards from "./DailyCards";
import HourlyCards from "./HourlyCards";
import forecast from "../forecast.json";
import Api from "./Api"




function App() {
 const forecast2 = Api().items
  
  console.log(forecast2);
  
    return (
    <div>
      <CurrentlyCard forecast={forecast}></CurrentlyCard>
      <DailyCards forecast={forecast}></DailyCards>
      <HourlyCards forecast={forecast}></HourlyCards>
    </div>
  );
}

export default App;
