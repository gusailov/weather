import { useState, useEffect } from "react";

function GetCoords() {
  const [position, setPosition] = useState([]);
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
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
  return {
    position,
  };
}

export default GetCoords;
