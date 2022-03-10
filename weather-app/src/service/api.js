import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "5d4e0cecc35a04afea154e0ec8093ba3";

export const getData = async (city, country) => {
  // if (city === " ") {
  //   city = "mumbai";
  // } else if (country === " ") {
  //   country = "india";
  // }
  return await axios.get(
    `${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
  );
};
