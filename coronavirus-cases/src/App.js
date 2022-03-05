import { Box, Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Chart from "./Components/Chart";
import Countries from "./Components/Countries";
import covid19 from "./images/COVID19.jpg";
import { fetchData } from "./Service/api";

const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    opacity: 0.6,
  },
  lastUpdate: {
    fontSize: 14,
    color: "#777",
  },
});

function App() {
  const [value, setValue] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    fetchingData();
  }, []);

  const classes = useStyle();

  async function fetchingData() {
    const response = await fetchData();
    setValue(response.data);
  }

  const handleCountryChange = async (country) => {
    const response = await fetchData(country);
    setValue(response.data);
    setCountry(country);
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.heading}>
        COVID-19 Dashboard
      </Typography>

      <Typography className={classes.lastUpdate}>
        Last Updated :
        {value.lastUpdate && new Date(value.lastUpdate).toDateString()}
      </Typography>

      <img
        src={covid19}
        alt="covid19"
        style={{ width: 350, margin: "20px 0" }}
      />

      <Cards data={value} country={country} />
      <Countries handleCountryChange={handleCountryChange} />
      <Chart data={value} />
    </Box>
  );
}

export default App;
