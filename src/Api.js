import React, { useState, useEffect } from "react";

function Api() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [position, setPosition] = useState([]);

  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function success(pos) {
      var crd = pos.coords;
      setPosition(crd);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const geo = navigator.geolocation.getCurrentPosition(
      success,
      error,
      options
    );
    console.log(geo);
  }, []);

  useEffect(() => {
    console.log(position.latitude);
    console.log(position.longitude);
    const ltd = position.latitude;
    const lng = position.longitude;
    fetch(`https://dark-sky.p.rapidapi.com/${ltd},${lng}?lang=en&units=auto`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "dark-sky.p.rapidapi.com",
        "x-rapidapi-key": "ENTER_KEY",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [position]);
  console.log(items);
  return <div className="App"></div>;
}

export default Api;
