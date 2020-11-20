import * as axios from "axios";

const OPEN_WEATHER_MAP_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

export const getForecast = (lat, lon, lang) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&exclude={part}&appid=${OPEN_WEATHER_MAP_API_KEY}`
  );
};

const OPEN_CAGE_GEOCODING_API_KEY =
  process.env.REACT_APP_OPEN_CAGE_GEOCODING_API_KEY;
export const getPlaceByCoords = (lat, lon, lang) => {
  return axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${OPEN_CAGE_GEOCODING_API_KEY}&language=${lang}&pretty=1`
  );
};

const LOCATIONIQ_API_KEY = process.env.REACT_APP_LOCATIONIQ_API_KEY;
export const getCoordsByPlace = (query) => {
  return axios.get(
    `https://api.locationiq.com/v1/autocomplete.php?key=${LOCATIONIQ_API_KEY}&q=${query}&limit=10`
  );
};
