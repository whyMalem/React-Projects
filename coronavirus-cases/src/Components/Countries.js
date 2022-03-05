import { NativeSelect, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { fetchCountriesData } from "../Service/api";

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCountriesData();
      //   console.log(response);
      setCountries(response);
    };

    fetchData();
  }, []);
  return (
    <>
      <Typography
        variant="h6"
        color="textSecondary"
        style={{ marginBottom: 20 }}
      >
        Reported Cases or Deaths by Country or Terrirtory
      </Typography>
      <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="United States">United States</option>
        {countries.map((country, i) => {
          return (
            <option value={country.name} key={i}>
              {country.name}
            </option>
          );
        })}
      </NativeSelect>
    </>
  );
};

export default Countries;
