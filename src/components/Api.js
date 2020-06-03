import React, { useState, useEffect } from "react";

function Api() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [position, setPosition] = useState([]);
  const ltd = position.latitude;
  const lng = position.longitude;
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
    //console.log(position.latitude);
    //console.log(position.longitude);

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${ltd}&lon=${lng}&exclude={part}&appid=`)
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
  }, [ltd, lng]);
  //console.log(items);
  return {
    items: items,
    ltd: position.latitude,
    lng: position.longitude,
    isLoaded: isLoaded,
    error: error,
  };
}

export default Api;
