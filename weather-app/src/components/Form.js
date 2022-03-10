import { Box, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { getData } from "../service/api";
import WeatherDetail from "./WeatherDetail";

const useStyles = makeStyles({
  form: {
    backgroundColor: "#44546f",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 12px",
  },
  input: {
    color: "#fff",
  },
  button: {
    width: "150px",
    height: 40,
    backgroundColor: "#e67e22",
    color: "#f5f5f5",
    "&:hover": {
      backgroundColor: "#e74c3c",
    },
  },
});

export const Form = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [city, setCity] = useState("mumbai");
  const [country, setCountry] = useState("india");
  const [click, setClick] = useState(false);

  useEffect(() => {
    const getWeather = async () => {
      city &&
        country &&
        (await getData(city, country).then((response) =>
          setData(response.data)
        ));
    };

    getWeather();
    // console.log(city, country);
    // console.log(data);
    setClick(false);
  }, [click]);

  return (
    <>
      <Box className={classes.form}>
        <TextField
          inputProps={{ className: classes.input }}
          label="City"
          onChange={(e) => setCity(e.target.value)}
          defaultValue={city}
          color="primary"
          // InputProps={{
          //   readOnly: true,
          // }}
          // value={city}
        />
        <TextField
          inputProps={{ className: classes.input }}
          label="Country"
          onChange={(e) => setCountry(e.target.value)}
          defaultValue={country}
          color="primary"

          // InputProps={{
          //   readOnly: true,
          // }}
          // value={country}
        />
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => setClick(true)}
        >
          Get Weather
        </Button>
      </Box>
      {Object.keys(data).length > 0 ? <WeatherDetail data={data} /> : ""}
      {/* <WeatherDetail data={data} city={city} country={country} /> */}
    </>
  );
};
