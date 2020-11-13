import * as axios from "axios";

const OPEN_WEATHER_MAP_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

export const getForecast = (lat, lon, lang) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&exclude={part}&appid=${OPEN_WEATHER_MAP_API_KEY}`
  );
};

const OPEN_CAGE_GEOCODING_API_KEY =
  process.env.REACT_APP_OPEN_CAGE_GEOCODING_API_KEY;
export const getPlaceByCoords = (lat, lon) => {
  return axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${lon}&key=${OPEN_CAGE_GEOCODING_API_KEY}&pretty=1`
  );
};
