import React, { useState, useEffect } from "react";
import CurrentlyCard from "./CurrentlyCard";
import DailyCards from "./DailyCards";

function App() {
  return (
    <div>
      <CurrentlyCard></CurrentlyCard>
      <DailyCards></DailyCards>
    </div>
  );
}

export default App;
