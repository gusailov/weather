import * as axios from "axios";

const OPEN_WEATHER_MAP_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

export const getForecast = (lat, lon, lang) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&exclude={part}&appid=${OPEN_WEATHER_MAP_API_KEY}`
    )
    
    
};
