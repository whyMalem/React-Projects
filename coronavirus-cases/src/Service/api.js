import axios from "axios";
const URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changedUrl = URL;
  if (country) {
    changedUrl = `${changedUrl}/countries/${country}`;
  }
  try {
    const response = await axios.get(changedUrl);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountriesData = async () => {
  try {
    const response = await axios.get(`${URL}/countries`);
    return response.data.countries;
  } catch (error) {
    console.log(error);
  }
};
