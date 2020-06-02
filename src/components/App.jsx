import React from "react";
import CurrentlyCard from "./CurrentlyCard";
import DailyCards from "./DailyCards";
import HourlyCards from "./HourlyCards";

function App() {
  return (
    <div>
      <CurrentlyCard></CurrentlyCard>
      <DailyCards></DailyCards>
      <HourlyCards></HourlyCards>
    </div>
  );
}

export default App;
