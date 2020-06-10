import { useState, useEffect } from "react";

function GetCoords() {
  const [position, setPosition] = useState([]);
  var options = {
    enableHighAccuracy: true,
    timeout: 3000,
    maximumAge: 0,
  };
  useEffect(() => {
    function success(pos) {
      var crd = pos.coords;
      setPosition(crd);
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  if (position) {
    return {
      position,
    };
  }
}

export default GetCoords;
