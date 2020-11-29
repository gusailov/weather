import * as axios from "axios";

const OPEN_WEATHER_MAP_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

export const getForecast = (lat, lon, lang) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&exclude={part}&appid=${OPEN_WEATHER_MAP_API_KEY}`
  );
};

const HERE_API_KEY = process.env.REACT_APP_HERE_API_KEY;
export const getPlaceByCoords = (lat, lon, lang) => {
  return axios.get(
    // `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${lat}%2C${lon}%2C250&mode=retrieveAddresses&maxresults=1&language=${lang}&&apiKey=${HERE_API_KEY}`
    `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat}%2C${lon}&lang=${lang}&apiKey=${HERE_API_KEY}`
  );
};

export const getCoordsByPlace = (query, lang) => {
  return axios.get(
    `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=AClf4N5ptTRnzG-jQmZUktrIeczLhLoimWUuvBh6jSw&query=${query}&language=${lang}&maxresults=20`
  );
};

export const getPlaceById = (id, lang) => {
  return axios.get(
    `https://geocoder.ls.hereapi.com/6.2/geocode.json?locationid=${id}&jsonattributes=1&gen=9&lang=${lang}&apiKey=${HERE_API_KEY}`
  );
};
